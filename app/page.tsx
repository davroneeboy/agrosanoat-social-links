import SocialLinks from '@/components/SocialLinks'

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
      <div className="w-full max-w-2xl text-center space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Agrosanoatni rivojlantirish agentligi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            QXV huzurida
          </p>
        </header>

        <SocialLinks />
      </div>
    </main>
  )
}

export default Home
