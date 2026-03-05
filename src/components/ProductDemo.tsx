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
      title: '서비스 지표,\n 공부할 필요없이\n이해하기 쉽게 설명해 드려요',
      description: 'Google Analytics, Amplitude 수집부터 진단까지 빠르고 쉽게 알려드려요. 이제 우리 제품을 Data-driven way로 개선할 수 있어요.',
      image: '/media/mockups/keyshot-01-analytics.png',
      alt: '애널리틱스 키샷 목업',
    },
    {
      subtitle: 'Benchmark',
      title: '비슷한 서비스의\n지표와 수익 구조,\n 한 눈에 파악하세요',
      description: '경쟁 서비스들 사이에서 내 위치가 어디인지 한눈에 확인해 보세요. \n강하거나 부족한 지표를 파악하면, 다음에 무엇을 할지 길이 보입니다.',
      image: '/media/mockups/keyshot-02-benchmark.png',
      alt: '벤치마크 키샷 목업',
    },
    {
      subtitle: 'Business Model',
      title: '내 서비스의 잠재력을\n 온전한 가치로\n수익 극대화 전략을 세워요',
      description: '시장 진입(Go-To-Market) 전략과 비용 구조를 기반으로, 현실적인 수익 전략을 도출합니다. 목표를 눈으로 보고, 담대하게 실현하세요.',
      image: '/media/mockups/keyshot-03-business-model.png',
      alt: '비즈니스 모델 키샷 목업',
    },
    {
      subtitle: 'Sprint',
      title: '클로드 코드에\n그대로 지시하세요.\n바로 실행 가능한 스프린트 전략',
      description: '코드 짜는 시간보다 계획 세우는데 시간이 40% 더 소모돼요.\n전문 PO/Growth 팀이 부럽지 않은 4주 스프린트를 지금 즉시 시작하세요!',
      image: '/media/mockups/keyshot-04-sprint.png',
      alt: '스프린트 키샷 목업',
    },
  ],
  en: [
    {
      subtitle: 'Analytics',
      title: 'No need to study complex metrics.\nWe explain them in a way that is easy to understand.',
      description: 'From Google Analytics and Amplitude tracking to diagnosis, we guide everything quickly and clearly. Your team can start improving the product in a data-driven way.',
      image: '/media/mockups/keyshot-01-analytics.png',
      alt: 'Analytics keyshot mockup',
    },
    {
      subtitle: 'Benchmark',
      title: 'See similar services’ metrics and revenue model at a glance.',
      description: 'We show your exact position against services in the same category and scale. Once weak metrics are visible, what to prioritize first becomes clear.',
      image: '/media/mockups/keyshot-02-benchmark.png',
      alt: 'Benchmark keyshot mockup',
    },
    {
      subtitle: 'Business Model',
      title: 'How much would revenue change if you redesign the model?',
      description: 'Based on your current cost structure and user data, we present realistic revenue scenarios. Not vague possibilities, but a numeric path you can follow.',
      image: '/media/mockups/keyshot-03-business-model.png',
      alt: 'Business model keyshot mockup',
    },
    {
      subtitle: 'Sprint',
      title: 'Broken down into units your team can execute in 4 weeks.',
      description: 'If strategy does not get executed, tasks are usually too large. With a 4-week sprint tied to revenue, you can start immediately.',
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

                <div className="keyshot-frame flex">
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
