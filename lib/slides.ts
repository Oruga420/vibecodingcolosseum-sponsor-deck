export type Slide = {
  key: string
  title: string
  subtitle: string
  bullets: string[]
  kpis: { value: string; label: string }[]
}

export const slides: Slide[] = [
  {
    key: 'cover',
    title: 'Vibe Coding Colosseum',
    subtitle:
      'Not a hackathon. A drop. Builders ship in 1 to 2 hours, the crowd votes live. Sponsors get attention, trust, and a clean way to reach makers.',
    bullets: [
      'Audience: builders, creators, operators, anyone who wants to ship fast',
      'Format: QuickDrop (short, intense, deliverable)',
      'Live: crowd vote + winner takes the drop',
      'Site: https://www.vibecodingcolosseum.com/'
    ],
    kpis: [
      { value: '$100 CAD', label: 'Entry' },
      { value: '10', label: 'Min to start' },
      { value: '15', label: 'Cap' },
      { value: '60/40', label: 'Prize/House' }
    ]
  },
  {
    key: 'problem',
    title: 'The problem',
    subtitle:
      'The internet is full of ideas. The bottleneck is shipping. People need a forcing function, a deadline, and a public scoreboard.',
    bullets: [
      'Builders want momentum, not another course',
      'Creators want a stage, not a blank page',
      'Sponsors want intent and reach, not banner blindness'
    ],
    kpis: [
      { value: '1 to 2h', label: 'Build window' },
      { value: 'Live', label: 'Voting' },
      { value: 'Real', label: 'Deliverables' },
      { value: 'Simple', label: 'Rules' }
    ]
  },
  {
    key: 'format',
    title: 'How QuickDrop works',
    subtitle:
      'Enter, ship, and earn. It is intentionally short so people finish. It is intentionally public so people care.',
    bullets: [
      'Step 1: join the roster (spots are limited)',
      'Step 2: ship something in 1 to 2 hours',
      'Step 3: crowd vote live',
      'Step 4: winner takes 60% of the pool'
    ],
    kpis: [
      { value: 'Fast', label: 'time-to-demo' },
      { value: 'Fun', label: 'competitive energy' },
      { value: 'Fair', label: 'transparent rules' },
      { value: 'Scalable', label: 'repeatable drops' }
    ]
  },
  {
    key: 'sponsor',
    title: 'Why sponsor this',
    subtitle:
      'You are not sponsoring a logo. You are sponsoring a moment: builders focused, creating, and sharing.',
    bullets: [
      'Brand + trust: you show up where shipping happens',
      'Lead gen: builders opt-in for your offer, not a cold ad',
      'Content engine: clips, demos, winner highlights, postmortems',
      'Community: sponsors can provide a mini-challenge or prize boost'
    ],
    kpis: [
      { value: 'High intent', label: 'makers in action' },
      { value: 'Repeatable', label: 'every drop' },
      { value: 'Shareable', label: 'clips + demos' },
      { value: 'Measurable', label: 'links + codes' }
    ]
  },
  {
    key: 'packages',
    title: 'Sponsor packages (draft)',
    subtitle:
      'We can keep it simple. Pick a lane. Get outcomes.',
    bullets: [
      'Bronze: logo + mention + link in the drop recap',
      'Silver: bronze + a 30s sponsor segment + giveaway code',
      'Gold: silver + sponsor challenge + prize pool boost + pinned post',
      'Custom: job board, tool credits, or co-host a themed drop'
    ],
    kpis: [
      { value: 'Bronze', label: 'entry sponsor' },
      { value: 'Silver', label: 'visibility + offer' },
      { value: 'Gold', label: 'headline sponsor' },
      { value: 'Custom', label: 'tailored' }
    ]
  },
  {
    key: 'cta',
    title: 'Next steps',
    subtitle:
      'If you want builders using your tool tomorrow, sponsor a drop today.',
    bullets: [
      'Pick a package and we lock the deliverables',
      'We generate tracking links + giveaway codes',
      'We ship the drop, then deliver a sponsor recap with metrics',
      'Contact: Oruga (Toronto)'
    ],
    kpis: [
      { value: 'Fast', label: 'setup' },
      { value: 'Clear', label: 'deliverables' },
      { value: 'Tracked', label: 'links + codes' },
      { value: 'Repeat', label: 'monthly drops' }
    ]
  }
]
