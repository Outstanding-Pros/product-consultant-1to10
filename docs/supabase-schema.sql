-- Run this in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  provider text not null check (provider in ('payapp', 'polar')),
  provider_order_id text,
  plan text not null check (plan in ('basic', 'pro')),
  locale text not null check (locale in ('ko', 'en')),
  payer_email text not null,
  payer_phone text,
  amount integer not null,
  currency text not null,
  status text not null check (status in ('pending', 'paid', 'failed', 'refunded')),
  paid_at timestamptz,
  intake_submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists orders_provider_provider_order_id_key
  on public.orders(provider, provider_order_id)
  where provider_order_id is not null;

create index if not exists orders_email_created_at_idx
  on public.orders(payer_email, created_at desc);

create table if not exists public.intake_forms (
  id bigserial primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  locale text not null check (locale in ('ko', 'en')),
  provider text not null check (provider in ('payapp', 'polar', 'unknown')),
  plan text not null check (plan in ('basic', 'pro')),
  service_name text not null,
  platform text not null,
  category text not null,
  dau text not null,
  monthly_revenue text not null,
  challenge text not null,
  contact_email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists intake_forms_order_id_key
  on public.intake_forms(order_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_orders_updated_at on public.orders;
create trigger trg_orders_updated_at
before update on public.orders
for each row execute function public.set_updated_at();


-- Row Level Security Policies

alter table public.orders enable row level security;
alter table public.intake_forms enable row level security;

create policy "Users can view their own orders"
on public.orders
for select
using (auth.jwt() ->> 'email' = payer_email);

create policy "Users can view their own intake forms"
on public.intake_forms
for select
using (
  exists (
    select 1 from public.orders
    where orders.id = intake_forms.order_id
    and orders.payer_email = (auth.jwt() ->> 'email')
  )
);