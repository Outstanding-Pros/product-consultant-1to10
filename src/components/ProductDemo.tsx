import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type ProductDemoProps = {
  locale: Locale
}

export default function ProductDemo({ locale }: ProductDemoProps) {
  const isEn = locale === 'en'

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <div className="demo-placeholder" role="img" aria-label={isEn ? 'Product demo video placeholder' : '제품 데모 영상 플레이스홀더'}>
            <div className="demo-badge">{isEn ? 'VIDEO PLACEHOLDER' : 'VIDEO PLACEHOLDER'}</div>
            <div className="demo-icon">▶</div>
            <p>
              {isEn
                ? 'Replace this block with your video embed or mp4 file.'
                : '여기에 영상 임베드 또는 mp4 파일을 연결하세요.'}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
