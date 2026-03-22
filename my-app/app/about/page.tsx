export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Про систему</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Система управління бібліотекою створена для зручного обліку книг,
            бронювань та роботи користувачів і бібліотекаря.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Призначення системи
          </h2>
          <p className="text-gray-700 mb-6">
            Ця система допомагає автоматизувати роботу бібліотеки. Читачі можуть
            переглядати каталог книг, шукати потрібні видання та створювати
            бронювання. Бібліотекар, у свою чергу, може керувати каталогом книг,
            переглядати всі активні бронювання та змінювати їх статус.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Основні переваги
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Зручний пошук книг за назвою або автором</li>
            <li>Можливість онлайн-бронювання книг</li>
            <li>Контроль доступності видань</li>
            <li>Розподіл ролей: бібліотекар і читач</li>
            <li>Простий та зрозумілий інтерфейс</li>
          </ul>
        </div>
      </section>
    </div>
  );
}