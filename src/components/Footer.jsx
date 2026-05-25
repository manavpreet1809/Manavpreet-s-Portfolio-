import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#EDE8E2', borderTop: '1px solid #D4CEC6' }}>
      <div className="container-md py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a href="#hero" className="font-mono text-sm font-semibold" style={{ color: '#0F0F0F' }}>
              <span style={{ color: '#BE123C' }}>{'<'}</span>
              Manavpreet Singh
              <span style={{ color: '#BE123C' }}>{' />'}</span>
            </a>
            <p className="text-[12px]" style={{ color: '#B8B2AA' }}>
              Built with React &amp; Tailwind CSS · {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {[
              { icon: Github,   href: 'https://github.com/manavpreet1809',                           label: 'GitHub'   },
              { icon: Linkedin, href: 'https://ca.linkedin.com/in/mmanavpreet-singh/', label: 'LinkedIn' },
              { icon: Mail,     href: 'mailto:manavpreetsingh0101@gmail.com',           label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: '#B8B2AA' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#BE123C'; e.currentTarget.style.backgroundColor = '#FFF1F3' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#B8B2AA'; e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
