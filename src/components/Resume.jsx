import { Download, FileText } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="section-padding" style={{ backgroundColor: '#F0EDE8' }}>
      <div className="section-container">
        <div className="glow-line mb-16" />

        <div
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 sm:px-16 sm:py-20 reveal"
          style={{
            backgroundColor: '#FFF8F9',
            border: '1px solid #F5C0C9',
          }}
        >
          <div
            className="inline-flex p-3 rounded-2xl mb-6"
            style={{ backgroundColor: '#FFF0F3', border: '1px solid #F5C0C9' }}
          >
            <FileText size={26} style={{ color: '#CC1230' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ color: '#111111' }}>
            Want the full picture?
          </h2>
          <p className="text-[15px] sm:text-base max-w-xl mx-auto mb-10 leading-[1.8]" style={{ color: '#555555' }}>
            Download my resume for a detailed overview of my experience, projects, education, and technical skills.
          </p>

          <a
            href="/Manavpreet_Singh_Resume.pdf"
            download
            className="btn-primary text-[15px] px-8 py-3.5 mx-auto"
          >
            <Download size={17} />
            Download Resume
          </a>

          <p className="text-[12px] mt-6" style={{ color: '#AAAAAA' }}>PDF · Updated 2026</p>
        </div>
      </div>
    </section>
  )
}
