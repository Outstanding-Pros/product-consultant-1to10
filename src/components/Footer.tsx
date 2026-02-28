export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-center text-[13px] text-text-muted">
      <p>
        © 2026 앱 수익 처방전 &nbsp;·&nbsp;{" "}
        <a
          href="mailto:hello@example.com"
          className="text-text-secondary no-underline transition-colors hover:text-accent"
        >
          문의하기
        </a>{" "}
        &nbsp;·&nbsp;{" "}
        <a
          href="#"
          className="text-text-secondary no-underline transition-colors hover:text-accent"
        >
          개인정보처리방침
        </a>
      </p>
    </footer>
  );
}
