import React, { useState } from 'react'

const WA_NUMBER = "6281213436740"

const siteTypes = [
  {
    title: "🏢 Website Perusahaan",
    desc: "Profil kredibilitas & katalog layanan",
    value: "Website Perusahaan (Corporate Profile)"
  },
  {
    title: "🛍️ Website UMKM & Katalog",
    desc: "Order via WhatsApp & galeri produk",
    value: "Website UMKM & Toko Online"
  },
  {
    title: "🎬 Website YouTube / Kreator",
    desc: "Video showcase, profil & endorsement",
    value: "Website YouTube Channel & Kreator Hub"
  },
  {
    title: "⚡ Custom Web & Web App",
    desc: "Fitur khusus, formulir & database",
    value: "Website Kustom & Sistem Aplikasi"
  }
]

const additionalFeatureOptions = [
  "Termasuk Nama Domain (.com / .id)",
  "Integrasi Tombol Order WhatsApp Otomatis",
  "Optimasi SEO Google Search",
  "Fitur Interaktif (Game / Kuis / Kalkulator)"
]

const servicesList = [
  {
    title: "Website Perusahaan (Corporate Profile)",
    category: "Website Perusahaan",
    icon: "fa-solid fa-building",
    iconBoxClass: "bg-brand-500/10 border-brand-500/30 text-brand-400 group-hover:bg-brand-500 group-hover:text-white",
    desc: "Membangun kredibilitas bisnis kelas profesional dengan profil perusahaan yang elegan, katalog layanan terstruktur, legalitas, dan form prospek klien B2B/B2C.",
    items: [
      "Desain Eksklusif & Elegan",
      "Integrasi Email Resmi Bisnis",
      "Optimasi Kecepatan & SEO Basic"
    ]
  },
  {
    title: "Website UMKM & Toko Online",
    category: "Website UMKM & Toko Online",
    icon: "fa-solid fa-store",
    cardBorder: "border-brand-cyan/30",
    iconBoxClass: "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-slate-900",
    desc: "Tingkatkan penjualan bisnis lokal atau produk retail dengan katalog produk rapi, tombol order langsung terhubung WhatsApp, dan lokasi Google Maps terpadu.",
    items: [
      "Tombol Direct Order WhatsApp",
      "Showcase Galeri Produk & Menu",
      "Integrasi Google Bisnis & Maps"
    ]
  },
  {
    title: "Website YouTube Channel & Creator Hub",
    category: "Website YouTube Channel & Kreator",
    icon: "fa-brands fa-youtube",
    iconBoxClass: "bg-red-500/10 border-red-500/30 text-red-400 group-hover:bg-red-500 group-hover:text-white",
    desc: "Pusat resmi bagi YouTuber, Animator, dan Kreator (seperti Sakha Sena Animation) untuk menampilkan video pilihan, profil karakter, merchandise, dan tawaran endorsement.",
    items: [
      "Embed Video & Pemutar Interaktif",
      "Media Kit & Kontak Sponsorship",
      "Mini Game / Kuis Interaktif Pengunjung"
    ]
  },
  {
    title: "Website Kustom & Sistem Aplikasi",
    category: "Website Kustom & Web App",
    icon: "fa-solid fa-layer-group",
    iconBoxClass: "bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500 group-hover:text-white",
    desc: "Membutuhkan fitur spesifik seperti formulir pendaftaran, sistem kalkulator kalkulasi harga, portal keanggotaan, atau integrasi API? Kami bangun tepat sesuai alur operasional Anda.",
    items: [
      "Arsitektur Kustom Sesuai Permintaan",
      "Integrasi API Pihak Ketiga",
      "Keamanan & Database Terenkripsi"
    ]
  },
  {
    title: "Konsultasi IT, Domain & Hosting",
    category: "Konsultasi IT & Domain",
    icon: "fa-solid fa-server",
    iconBoxClass: "bg-teal-500/10 border-teal-500/30 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900",
    desc: "Bingung memilih nama domain, hosting, server cloud (Vercel, AWS, Cloudflare), atau migrasi website? Kami bantu beri arahan teknis paling hemat dan efektif.",
    items: [
      "Setup Domain .com / .id / .co.id",
      "Sertifikat SSL & Keamanan Cloudflare",
      "Troubleshooting Website Error"
    ]
  },
  {
    title: "Landing Page Iklan & Promosi (Single Page)",
    category: "Landing Page Iklan",
    icon: "fa-solid fa-bullhorn",
    iconBoxClass: "bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-900",
    desc: "Website 1 halaman dengan kecepatan muat super tinggi, dioptimalkan khusus untuk kampanye iklan Google Ads, TikTok Ads, Meta Ads, dan peluncuran produk baru.",
    items: [
      "Kecepatan Muat di Bawah 2 Detik",
      "Copywriting Berorientasi Penjualan",
      "Tracking Pixel & Analytics Ready"
    ]
  }
]

const faqs = [
  {
    id: 'faq-1',
    question: "Berapa kisaran biaya pembuatan website di eskatechmedia?",
    answer: "Biaya disesuaikan dengan kebutuhan dan jenis website (misalnya Landing Page 1 Halaman untuk UMKM atau Kanal YouTube tentu lebih terjangkau dibanding Web Sistem Kustom dengan database kompleks). Silakan diskusikan kebutuhan Anda ke nomor WhatsApp 081213436740 untuk mendapatkan penawaran harga terbaik tanpa biaya konsultasi."
  },
  {
    id: 'faq-2',
    question: "Berapa lama proses pengerjaan website?",
    answer: "Untuk website 1 halaman (Landing Page, Profil UMKM, atau YouTube Channel Hub), rata-rata selesai dalam 1-3 hari kerja setelah materi (teks/foto/video) lengkap. Untuk sistem yang lebih kompleks memakan waktu 1-2 minggu."
  },
  {
    id: 'faq-3',
    question: "Apakah saya dibantu menyiapkan Domain dan Server Hosting?",
    answer: "Ya, tentu saja! Sebagai konsultan IT, kami membantu proses pemilihan dan setup nama domain (seperti .com, .id, atau .co.id) serta konfigurasi server agar website Anda langsung live dan dapat dibuka publik."
  },
  {
    id: 'faq-4',
    question: "Apakah website bisa dibuka lancar di handphone?",
    answer: "Pasti. Setiap website yang dibuat oleh eskatechmedia menganut prinsip Mobile-First Responsive, sehingga terlihat rapi, responsif, dan mudah dioperasikan baik di smartphone Android/iOS, tablet, maupun layar laptop."
  }
]

export default function App() {
  // Estimator State
  const [selectedSiteType, setSelectedSiteType] = useState("Website Perusahaan (Corporate Profile)")
  const [selectedFeatures, setSelectedFeatures] = useState([
    "Integrasi Tombol Order WhatsApp Otomatis"
  ])

  // Contact Form State
  const [clientName, setClientName] = useState("")
  const [clientCategory, setClientCategory] = useState("Website Perusahaan")
  const [clientNotes, setClientNotes] = useState("")

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const toggleFaq = (id) => {
    setOpenFaq(prev => prev === id ? null : id)
  }

  const requestSpecificService = (serviceName) => {
    const textMessage = encodeURIComponent(`Halo eskatechmedia, saya tertarik dengan layanan *${serviceName}*. Bisakah saya konsultasi mengenai spesifikasi dan penawaran harganya?`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${textMessage}`, '_blank')
  }

  const sendCalculatedEstimate = () => {
    let textMessage = `Halo eskatechmedia, saya ingin berkonsultasi dan meminta penawaran harga pembuatan website:%0A%0A`
    textMessage += `*Tipe Website:* ${encodeURIComponent(selectedSiteType)}%0A`
    
    if (selectedFeatures.length > 0) {
      const formattedFeatures = selectedFeatures.map(f => `- ${f}`).join('\n')
      textMessage += `*Fitur Tambahan:*%0A${encodeURIComponent(formattedFeatures)}%0A%0A`
    }
    textMessage += `Mohon info kisaran harga dan estimasi waktu pengerjaannya. Terima kasih!`

    window.open(`https://wa.me/${WA_NUMBER}?text=${textMessage}`, '_blank')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let text = `Halo eskatechmedia, saya ingin konsultasi pembuatan website:%0A%0A`
    text += `*Nama / Usaha:* ${encodeURIComponent(clientName.trim())}%0A`
    text += `*Kategori Web:* ${encodeURIComponent(clientCategory)}%0A`
    text += `*Keterangan Kebutuhan:* ${encodeURIComponent(clientNotes.trim())}%0A%0A`
    text += `Mohon arahan dan penawaran harganya. Terima kasih!`

    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-brand-darker text-slate-100">
      
      {/* ==================== TOP NAVIGATION ==================== */}
      <nav className="sticky top-0 z-50 bg-brand-darker/80 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-brand-cyan flex items-center justify-center text-white text-xl shadow-glow-indigo group-hover:scale-105 transition duration-300">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                eska<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-cyan">techmedia</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                IT Consultant & Web Dev
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#layanan" className="hover:text-white hover:text-brand-cyan transition-colors">Layanan</a>
            <a href="#keunggulan" className="hover:text-white hover:text-brand-cyan transition-colors">Keunggulan</a>
            <a href="#kalkulator" className="hover:text-white hover:text-brand-cyan transition-colors flex items-center gap-1.5 text-brand-400">
              <i className="fa-solid fa-calculator text-xs"></i> Estimasi Kebutuhan
            </a>
            <a href="#alur" className="hover:text-white hover:text-brand-cyan transition-colors">Alur Kerja</a>
            <a href="#faq" className="hover:text-white hover:text-brand-cyan transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${WA_NUMBER}?text=Halo%20eskatechmedia,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition duration-200 text-sm">
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span className="hidden sm:inline">Konsultasi Gratis</span>
              <span className="sm:hidden">Chat WA</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-500/30 text-brand-400 font-medium text-xs sm:text-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Solusi Digital & Konsultan IT Terpercaya untuk Bisnis Anda
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Bangun Website Modern, Cepat & Siap Deploy Bersama <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-brand-cyan to-teal-300">eskatechmedia</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
              Kami mewujudkan website yang dirancang khusus sesuai identitas & target bisnis Anda. Mulai dari <strong className="text-white font-semibold">Website Perusahaan</strong>, <strong className="text-white font-semibold">UMKM</strong>, <strong className="text-white font-semibold">Kanal YouTube / Kreator</strong>, hingga <strong className="text-white font-semibold">Sistem Web Kustom</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20eskatechmedia,%20saya%20ingin%20konsultasi%20pembuatan%20website%20dan%20mengetahui%20penawaran%20harga.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-xl shadow-glow-indigo transition duration-200 text-base">
                <i className="fa-brands fa-whatsapp text-xl text-emerald-300"></i>
                Tanya Harga & Konsultasi Sekarang
              </a>

              <a 
                href="#kalkulator" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-slate-200 hover:text-white font-semibold px-7 py-4 rounded-xl border border-white/10 transition duration-200 text-base">
                <i className="fa-solid fa-sliders text-brand-cyan"></i>
                Hitung Kebutuhan Website
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-brand-cyan"></i> Harga Fleksibel Sesuai Kebutuhan
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-brand-cyan"></i> Responsive Mobile-First
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-brand-cyan"></i> Siap Live & Bebas Ribet
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== LAYANAN KAMI ==================== */}
      <section id="layanan" class="py-20 bg-brand-dark/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Layanan Lengkap</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Segala Jenis Website yang Kami Kerjakan
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Setiap proyek dikerjakan secara teliti dengan teknologi modern untuk performa kencang, aman, dan mudah digunakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((srv, idx) => (
              <div 
                key={idx} 
                className={`glass-card rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-1 transition duration-300 ${srv.cardBorder || ''}`}>
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl transition duration-300 ${srv.iconBoxClass}`}>
                    <i className={srv.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2 pt-2">
                    {srv.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <i className="fa-solid fa-check text-emerald-400"></i> {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button 
                    onClick={() => requestSpecificService(srv.category)}
                    className="text-xs font-bold text-brand-cyan hover:text-white flex items-center gap-1.5 transition cursor-pointer">
                    Konsultasi Layanan Ini <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== KALKULATOR ESTIMASI KEBUTUHAN WEBSITE ==================== */}
      <section id="kalkulator" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Alat Bantu Estimasi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Simulasikan Kebutuhan Website Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Pilih tipe website dan fitur yang Anda inginkan. Kami akan langsung menyiapkan estimasi penawaran harga terbaik via WhatsApp.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-500/30 shadow-card-elevated space-y-8">
            
            {/* Langkah 1 */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white inline-flex items-center justify-center text-xs">1</span>
                Pilih Jenis Website:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteTypes.map((item, idx) => {
                  const isActive = selectedSiteType === item.value
                  return (
                    <button 
                      key={idx}
                      type="button" 
                      onClick={() => setSelectedSiteType(item.value)} 
                      className={`text-left p-4 rounded-xl border transition cursor-pointer ${
                        isActive 
                          ? 'border-brand-500 bg-brand-500/20 text-white' 
                          : 'border-white/10 hover:border-brand-500/50 bg-white/5 text-slate-300'
                      }`}>
                      <div className="font-bold">{item.title}</div>
                      <div className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>{item.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white inline-flex items-center justify-center text-xs">2</span>
                Pilih Fitur / Kebutuhan Tambahan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalFeatureOptions.map((feat, idx) => (
                  <label key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-brand-cyan/40 transition">
                    <input 
                      type="checkbox" 
                      checked={selectedFeatures.includes(feat)}
                      onChange={() => toggleFeature(feat)}
                      className="w-4 h-4 rounded text-brand-500 bg-slate-900 border-slate-700 focus:ring-0" 
                    />
                    <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="p-5 rounded-2xl bg-brand-darker border border-brand-500/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status Pemilihan:</span>
                  <h4 className="text-base font-bold text-brand-cyan">{selectedSiteType}</h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-emerald-400 font-semibold block">Konsultasi Bebas Biaya</span>
                  <span className="text-xs text-slate-400">Harga negotiable & transparan</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-white/5 pt-3">
                {selectedFeatures.length > 0 
                  ? `Fitur terpilih: ${selectedFeatures.join(', ')}`
                  : 'Belum ada fitur tambahan yang dicentang.'}
              </p>

              <button 
                onClick={sendCalculatedEstimate}
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition cursor-pointer">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Kirim Spesifikasi ke WhatsApp & Minta Penawaran Harga
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== KEUNGGULAN ESKATECHMEDIA ==================== */}
      <section id="keunggulan" className="py-20 bg-brand-dark/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Nilai Tambah Kami</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Mengapa Mempercayakan Website ke eskatechmedia?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Kami bukan sekadar membuat halaman terlihat bagus, tetapi memastikan website Anda menghasilkan nilai nyata bagi bisnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center text-xl">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Kecepatan Muat Tinggi</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Kode bersih dan aset teroptimasi memastikan website terbuka instan, mengurangi bounce rate pengunjung.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-xl">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Mobile-First Responsive</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Lebih dari 80% calon pembeli mengakses lewat HP. Tampilan website Anda dijamin sempurna di segala ukuran layar.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Harga Fleksibel & Ramah</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Tak perlu bayar mahal untuk fitur yang tidak Anda butuhkan. Kami sesuaikan spesifikasi sesuai skala budget Anda.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Dukungan & Panduan</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Website langsung siap pakai (*ready to deploy*). Kami siap memandu jika Anda butuh update konten atau bantuan teknis.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== ALUR PENGERJAAN ==================== */}
      <section id="alur" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Langkah Sederhana</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Alur Pengerjaan Mudah & Cepat
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Cukup 4 tahapan praktis tanpa istilah teknis yang membingungkan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-2xl p-6 border-t-4 border-brand-500 space-y-3">
              <span className="text-2xl font-black text-brand-500/40">01</span>
              <h3 className="text-lg font-bold text-white">Konsultasi Kebutuhan</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hubungi kami via WhatsApp di <strong>081213436740</strong>. Ceritakan jenis usaha, referensi tampilan, dan target yang ingin dicapai.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-t-4 border-brand-cyan space-y-3">
              <span className="text-2xl font-black text-brand-cyan/40">02</span>
              <h3 className="text-lg font-bold text-white">Penawaran & Konsep</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kami berikan estimasi harga yang pas dan rancangan struktur halaman website yang paling efektif untuk bisnis Anda.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-t-4 border-indigo-400 space-y-3">
              <span className="text-2xl font-black text-indigo-400/40">03</span>
              <h3 className="text-lg font-bold text-white">Proses Development</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Website mulai dikerjakan dan dikembangkan dengan standar kode modern, responsif di HP, dan pengujian fitur.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-t-4 border-emerald-400 space-y-3">
              <span className="text-2xl font-black text-emerald-400/40">04</span>
              <h3 className="text-lg font-bold text-white">Peluncuran (Live Online)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Website di-deploy ke server online, dihubungkan ke domain Anda, dan siap digunakan untuk menjaring pelanggan baru!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== FAQ ACCORDION ==================== */}
      <section id="faq" className="py-20 bg-brand-dark/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Pertanyaan Umum</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Sering Ditanyakan Klien
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(faq => {
              const isOpen = openFaq === faq.id
              return (
                <div key={faq.id} className="glass-card rounded-2xl p-5 border border-white/10">
                  <button 
                    onClick={() => toggleFaq(faq.id)} 
                    className="w-full flex items-center justify-between text-left font-bold text-base text-white focus:outline-none cursor-pointer">
                    <span>{faq.question}</span>
                    <i className={`fa-solid fa-chevron-down text-brand-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-white/5 text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ==================== FORM KONTAK & KONSULTASI ==================== */}
      <section id="kontak" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="glass-card rounded-3xl p-6 sm:p-12 border border-brand-500/30 shadow-card-elevated space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-white">Mulai Konsultasi Proyek Anda</h2>
              <p className="text-slate-400 text-sm">
                Isi formulir ringkas di bawah ini, pesan Anda akan otomatis disiapkan untuk langsung dikirim ke WhatsApp konsultan kami.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Anda / Perusahaan *</label>
                  <input 
                    type="text" 
                    required 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra / Toko Berkah" 
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-500 focus:outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Kategori Website yang Diinginkan *</label>
                  <select 
                    value={clientCategory}
                    onChange={(e) => setClientCategory(e.target.value)}
                    required 
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-500 focus:outline-none">
                    <option value="Website Perusahaan">Website Perusahaan (Corporate Profile)</option>
                    <option value="Website UMKM / Toko Online">Website UMKM / Toko Online</option>
                    <option value="Website YouTube Channel / Creator Hub">Website YouTube Channel / Creator Hub</option>
                    <option value="Landing Page Promosi">Landing Page Promosi / 1 Page</option>
                    <option value="Website Custom & Sistem Lainnya">Website Custom & Sistem Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Ceritakan Singkat Kebutuhan Anda *</label>
                <textarea 
                  rows="3" 
                  required 
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Contoh: Saya butuh website 1 page untuk usaha kuliner saya, ada foto menu dan tombol direct order ke nomor WhatsApp..." 
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-500 focus:outline-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition text-base cursor-pointer">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Kirim Konsultasi ke WhatsApp: 081213436740
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-brand-darker border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-cyan flex items-center justify-center text-white text-lg font-bold">
                  <i className="fa-solid fa-code"></i>
                </div>
                <span className="text-xl font-extrabold text-white">
                  eska<span className="text-brand-cyan">techmedia</span>
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Konsultan IT dan mitra pembuatan segala jenis website: profil perusahaan, UMKM, hub kreator YouTube, hingga sistem web kustom siap deploy dengan performa tinggi.
              </p>

              <div className="pt-2 flex flex-col space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
                  <span>Hotline WhatsApp: <strong>081213436740</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-brand-cyan text-base"></i>
                  <span>Layanan Konsultasi Online: Setiap Hari (08.00 - 22.00 WIB)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Layanan</h4>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>Website Perusahaan</li>
                <li>Website UMKM & Katalog</li>
                <li>Website YouTube Channel</li>
                <li>Landing Page Promosi</li>
                <li>Konsultasi IT & Domain Setup</li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Hubungi Langsung</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Siap mendiskusikan ide website Anda sekarang? Klik tombol di bawah untuk terhubung langsung:
              </p>
              <a 
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20eskatechmedia,%20saya%20ingin%20konsultasi%20pembuatan%20website`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold bg-white/5 hover:bg-white/10 text-emerald-400 border border-emerald-500/30 px-3 py-2 rounded-lg transition">
                <i className="fa-brands fa-whatsapp"></i> Chat 081213436740
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 eskatechmedia. All rights reserved.</p>
            <p>Solusi Konsultan IT & Web Development Indonesia 🇮🇩</p>
          </div>

        </div>
      </footer>

      {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center bg-brand-dark/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
          Konsultasi Gratis via WhatsApp
        </div>

        <a 
          href={`https://wa.me/${WA_NUMBER}?text=Halo%20eskatechmedia,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website`} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Hubungi eskatechmedia di WhatsApp"
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-transform duration-200">
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
          </span>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </div>
  )
}
