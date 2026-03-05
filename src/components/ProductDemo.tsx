import Image from 'next/image'
import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type ProductDemoProps = {
  locale: Locale
}

type Keyshot = {
  subtitle: string
  title: string
  description: string
  image: string
  alt: string
}

const keyshotsByLocale: Record<Locale, Keyshot[]> = {
  ko: [
    {
      subtitle: 'Analytics',
      title: '숫자는 있는데, 읽히지 않는다',
      description: '트래픽도 있고, 지표도 있어요. 근데 그게 좋은 건지 나쁜 건지 판단이 안 된다면, 진단부터 다시 시작해야 합니다.',
      image: '/media/mockups/keyshot-01-analytics.png',
      alt: '애널리틱스 키샷 목업',
    },
    {
      subtitle: 'Benchmark',
      title: '비슷한 서비스들은 지금 얼마 벌고 있을까',
      description: '같은 규모, 같은 카테고리 서비스들과 비교해 내 위치를 정확히 보여줍니다. 뒤처진 지표가 보이면, 뭘 먼저 해야 할지도 보입니다.',
      image: '/media/mockups/keyshot-02-benchmark.png',
      alt: '벤치마크 키샷 목업',
    },
    {
      subtitle: 'Business Model',
      title: '수익 구조를 바꾸면 얼마가 될까',
      description: '지금 비용 구조와 유저 데이터를 기반으로, 현실적인 수익 시나리오를 보여줍니다. 막연한 가능성이 아니라 숫자로 된 경로예요.',
      image: '/media/mockups/keyshot-03-business-model.png',
      alt: '비즈니스 모델 키샷 목업',
    },
    {
      subtitle: 'Sprint',
      title: '4주 안에 실행할 수 있는 단위로',
      description: '전략은 있는데 실행이 안 된다면, 태스크가 너무 크기 때문이에요. 매출과 연결된 4주 스프린트로 지금 당장 시작할 수 있습니다.',
      image: '/media/mockups/keyshot-04-sprint.png',
      alt: '스프린트 키샷 목업',
    },
  ],
  en: [
    {
      subtitle: 'Analytics',
      title: 'You have numbers, but they are not readable',
      description: 'Traffic and metrics exist, but if you cannot judge what is good or bad, you need to restart from diagnosis.',
      image: '/media/mockups/keyshot-01-analytics.png',
      alt: 'Analytics keyshot mockup',
    },
    {
      subtitle: 'Benchmark',
      title: 'How much are similar services making now?',
      description: 'We show your position against services in the same category and scale. Once weak metrics appear, priorities become clear.',
      image: '/media/mockups/keyshot-02-benchmark.png',
      alt: 'Benchmark keyshot mockup',
    },
    {
      subtitle: 'Business Model',
      title: 'How much changes if the business model changes?',
      description: 'Based on your current cost structure and user data, we show realistic revenue scenarios. Not vague possibilities, but numeric paths.',
      image: '/media/mockups/keyshot-03-business-model.png',
      alt: 'Business model keyshot mockup',
    },
    {
      subtitle: 'Sprint',
      title: 'Broken down into what can be executed in 4 weeks',
      description: 'If strategy is not executed, tasks are usually too big. Start now with a 4-week sprint tied to revenue outcomes.',
      image: '/media/mockups/keyshot-04-sprint.png',
      alt: 'Sprint keyshot mockup',
    },
  ],
}

export default function ProductDemo({ locale }: ProductDemoProps) {
  const keyshots = keyshotsByLocale[locale]

  return (
    <section className="keyshot-section">
      {keyshots.map((item, idx) => (
        <div key={idx} className={`keyshot-band${idx % 2 === 1 ? ' alt' : ''}`}>
          <div className="container">
            <Reveal>
              <article className={`keyshot-row${idx % 2 === 1 ? ' reverse' : ''}`}>
                <div className="keyshot-copy">
                  <span className="keyshot-subtitle">{item.subtitle}</span>
                  <h3 className="keyshot-title">{item.title}</h3>
                  <p className="keyshot-desc">{item.description}</p>
                </div>

                <div className="keyshot-frame">
                  <div className="keyshot-frame-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="keyshot-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={760}
                      className="keyshot-image"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  )
}
