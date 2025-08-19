export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Projeto Criado!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Seu projeto foi gerado com sucesso pela Twizo AI.
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prompt Original:</h2>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
              "💬 Chat app com mensagens em tempo real"
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">⚡ Next.js 15</h3>
              <p className="text-gray-600">
                Framework React moderno com App Router
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">🎨 Tailwind CSS</h3>
              <p className="text-gray-600">
                Estilização utilitária e responsiva
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">📝 TypeScript</h3>
              <p className="text-gray-600">
                Tipagem estática para maior segurança
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}