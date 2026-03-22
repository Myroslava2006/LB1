export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секція */}
      <section className="bg-green-700 text-white py-20">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-5xl font-bold mb-6">
      Система управління бібліотекою
    </h1>
    <p className="text-xl max-w-2xl mx-auto">
      Адміністратор керує каталогом книг, а читачі можуть переглядати книги
      та створювати бронювання онлайн.
    </p>

    <a
      href="/about"
      className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      Детальніше
    </a>
  </div>
</section>

      {/* Секція можливостей */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Основні можливості
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Картка 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Каталог книг
              </h3>
              <p className="text-gray-600">
                Перегляд книг, пошук за назвою або автором, а також перевірка
                доступності видання.
              </p>
            </div>

            {/* Картка 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Бронювання книг
              </h3>
              <p className="text-gray-600">
                Читач може створювати бронювання, переглядати свої заявки та
                скасовувати їх за потреби.
              </p>
            </div>

            {/* Картка 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Панель бібліотекаря
              </h3>
              <p className="text-gray-600">
                Адміністратор додає та редагує книги, переглядає активні
                бронювання і змінює їх статус.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Додаткова секція */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Для кого система
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Бібліотекар
              </h3>
              <p className="text-gray-700">
                Керує каталогом книг, переглядає всі бронювання, змінює статус
                заявок та контролює повернення книг.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Читач
              </h3>
              <p className="text-gray-700">
                Переглядає книги, шукає потрібні видання, створює бронювання та
                відстежує власні заявки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
  © 2026 Miroslava | Курс "Основи обробки та передачі інформації"
</p>
        </div>
      </footer>
    </div>
  );
}