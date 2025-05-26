  const contentMap = {
    // Содержимое для собак
    "Вакцинация собак": `
    <div class="vaccination-block">
      <h3>🐾 Вакцинация: защита на всю жизнь</h3>
      <div class="info-card">
        <p class="lead">Основные защищаемые заболевания:</p>
        <ul class="disease-list">
          <li><i class="fas fa-virus"></i> Чумка (чума плотоядных)</li>
          <li><i class="fas fa-biohazard"></i> Парвовирусный энтерит</li>
          <li><i class="fas fa-brain"></i> Бешенство (обязательная по закону)</li>
          <li><i class="fas fa-lungs-virus"></i> Лептоспироз</li>
          <li><i class="fas fa-tint"></i> Инфекционный гепатит</li>
        </ul>
        
        <div class="schedule-box">
          <h4>📅 График вакцинации:</h4>
          <table>
            <tr><th>Возраст</th><th>Тип вакцины</th><th>Важность</th></tr>
            <tr><td>6-8 недель</td><td>Первичная (DHPPi)</td><td>⭐⭐⭐⭐⭐</td></tr>
            <tr><td>10-12 недель</td><td>Ревакцинация + бешенство</td><td>⭐⭐⭐⭐⭐</td></tr>
            <tr><td>1 год</td><td>Повтор всех вакцин</td><td>⭐⭐⭐⭐</td></tr>
            <tr><td>Каждый год</td><td>Ежегодная ревакцинация</td><td>⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>

        <div class="warning-box">
          <h5>⚠️ Подготовка к прививке:</h5>
          <ul>
            <li>За 10 дней провести дегельминтизацию</li>
            <li>Измерение температуры за сутки</li>
            <li>Отсутствие контактов с больными животными</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    
    // Содержимое для кошек
    "Вакцинация кошек": `
      <div class="vaccination-block">
  <h3>🐾 Вакцинация: залог здоровья вашей кошки</h3>
  <div class="info-card">
    <p class="lead">Основные защищаемые заболевания:</p>
    <ul class="disease-list">
      <li><i class="fas fa-virus"></i> Панлейкопения (кошачья чумка)</li>
      <li><i class="fas fa-head-side-cough"></i> Кальцивироз</li>
      <li><i class="fas fa-head-side-mask"></i> Вирусный ринотрахеит</li>
      <li><i class="fas fa-brain"></i> Бешенство (обязательная по закону)</li>
      <li><i class="fas fa-syringe"></i> Хламидиоз (по показаниям)</li>
    </ul>
    
    <div class="schedule-box">
      <h4>📅 График вакцинации:</h4>
      <table>
        <tr><th>Возраст</th><th>Тип вакцины</th><th>Важность</th></tr>
        <tr><td>8-9 недель</td><td>Первая комбинированная (PCHR)</td><td>⭐⭐⭐⭐⭐</td></tr>
        <tr><td>11-12 недель</td><td>Ревакцинация + бешенство</td><td>⭐⭐⭐⭐⭐</td></tr>
        <tr><td>1 год</td><td>Повтор всех вакцин</td><td>⭐⭐⭐⭐</td></tr>
        <tr><td>Каждый год</td><td>Ежегодная ревакцинация</td><td>⭐⭐⭐⭐⭐</td></tr>
      </table>
    </div>

    <div class="warning-box">
      <h5>⚠️ Подготовка к прививке:</h5>
      <ul>
        <li>Провести дегельминтизацию за 7–10 дней до вакцинации</li>
        <li>Убедиться в хорошем самочувствии животного</li>
        <li>Избегать стрессов и контактов с другими животными перед прививкой</li>
      </ul>
    </div>
  </div>
</div>
    `,
    "Обработка от паразитов собак": `
    <div class="parasite-protection">
      <h3>🦠 Полная защита от паразитов</h3>
      <div class="columns-2">
        <div class="parasite-type">
          <h4><i class="fas fa-spider"></i> Внешние паразиты:</h4>
          <ul>
            <li>Блохи (Ctenocephalides canis)</li>
            <li>Иксодовые клещи</li>
            <li>Ушные клещи (Otodectes)</li>
            <li>Власоеды (Trichodectes canis)</li>
          </ul>
        </div>
        
        <div class="parasite-type">
          <h4><i class="fas fa-worm"></i> Внутренние паразиты:</h4>
          <ul>
            <li>Круглые черви (нематоды)</li>
            <li>Ленточные черви (цестоды)</li>
            <li>Сердечные черви (дирофилярии)</li>
            <li>Лямблии</li>
          </ul>
        </div>
      </div>

      <div class="treatment-schedule">
        <h4>📌 Схема обработок:</h4>
        <div class="schedule-cards">
          <div class="card">
            <h5>Щенки <span class="age-badge">до 6 мес</span></h5>
            <ul>
              <li>Каждые 2 недели до 3 мес</li>
              <li>Каждые 4 недели до 6 мес</li>
              <li>Капли на холку с 8 недель</li>
            </ul>
          </div>
          
          <div class="card">
            <h5>Взрослые <span class="age-badge">6+ мес</span></h5>
            <ul>
              <li>Глистогонка: каждые 3 мес</li>
              <li>От блох/клещей: март-ноябрь</li>
              <li>Спреи перед прогулками</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
    "Обработка от паразитов кошек": `
<div class="parasite-protection">
  <h3>🦠 Полная защита от паразитов</h3>
  <div class="columns-2">
    <div class="parasite-type">
      <h4><i class="fas fa-spider"></i> Внешние паразиты:</h4>
      <ul>
        <li>Блохи (Ctenocephalides felis)</li>
        <li>Иксодовые клещи</li>
        <li>Ушные клещи (Otodectes cynotis)</li>
        <li>Власоеды (Felicola subrostratus)</li>
      </ul>
    </div>
    
    <div class="parasite-type">
      <h4><i class="fas fa-worm"></i> Внутренние паразиты:</h4>
      <ul>
        <li>Круглые черви (токсокары, анкилостомы)</li>
        <li>Ленточные черви (дипилидиум, таения)</li>
        <li>Простейшие (лямблии, кокцидии)</li>
        <li>Сердечные черви (редко, в эндемичных регионах)</li>
      </ul>
    </div>
  </div>

  <div class="treatment-schedule">
    <h4>📌 Схема обработок:</h4>
    <div class="schedule-cards">
      <div class="card">
        <h5>Котята <span class="age-badge">до 6 мес</span></h5>
        <ul>
          <li>Глистогонка каждые 2 недели до 3 мес</li>
          <li>Далее — раз в месяц до 6 мес</li>
          <li>Капли от блох с 8 недель</li>
        </ul>
      </div>
      
      <div class="card">
        <h5>Взрослые <span class="age-badge">6+ мес</span></h5>
        <ul>
          <li>Глистогонка: каждые 3 месяца</li>
          <li>Обработка от блох и клещей: каждые 1–2 мес</li>
          <li>Проверка у ветеринара при подозрении на заражение</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`,
"Как подготовить щенка": `
    <div class="puppy-training">
      <h3>🐶 Подготовка щенка к первому визиту</h3>
      <div class="training-steps">
        <div class="step">
          <div class="step-number">1</div>
          <h4>Знакомство с процедурами:</h4>
          <ul>
            <li>Осмотр зубов (давать лакомство)</li>
            <li>Приучение к расчёсыванию</li>
            <li>Массаж лап и подушечек</li>
          </ul>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <h4>Транспортировка:</h4>
          <ul>
            <li>Знакомство с переноской</li>
            <li>Короткие поездки</li>
            <li>Игрушка с запахом дома</li>
          </ul>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <h4>В клинике:</h4>
          <ul>
            <li>Первое посещение - только знакомство</li>
            <li>Практика взвешивания</li>
            <li>Поощрение после осмотра</li>
          </ul>
        </div>
      </div>

      <div class="pro-tips">
        <h4>📌 Профессиональные советы:</h4>
        <ul>
          <li>Используйте феромоны Adaptil</li>
          <li>Избегайте кормления за 2 часа до визита</li>
          <li>Возьмите любимое одеяло</li>
        </ul>
      </div>
    </div>
  `,
  "Как подготовить котенка": `
    <div class="puppy-training">
  <h3>🐱 Подготовка котёнка к первому визиту</h3>
  <div class="training-steps">
    <div class="step">
      <div class="step-number">1</div>
      <h4>Привыкание к уходу:</h4>
      <ul>
        <li>Лёгкий осмотр ушей и рта</li>
        <li>Приучение к расчёсыванию мягкой щёткой</li>
        <li>Касания лап и подушечек</li>
      </ul>
    </div>

    <div class="step">
      <div class="step-number">2</div>
      <h4>Транспортировка:</h4>
      <ul>
        <li>Заранее показать переноску</li>
        <li>Оставлять в ней лакомства</li>
        <li>Положить плед с домашним запахом</li>
      </ul>
    </div>

    <div class="step">
      <div class="step-number">3</div>
      <h4>В клинике:</h4>
      <ul>
        <li>Первый визит — без процедур</li>
        <li>Пробное взвешивание и осмотр</li>
        <li>Угощение после приёма</li>
      </ul>
    </div>
  </div>

  <div class="pro-tips">
    <h4>📌 Профессиональные советы:</h4>
    <ul>
      <li>Используйте феромоны Feliway</li>
      <li>Не кормите за 2–3 часа до поездки</li>
      <li>Избегайте резких звуков и стрессов</li>
    </ul>
  </div>
</div>

  `,
// документы
  "Документы и прививки собак": `
    <div class="documents-checklist">
      <h3>📂 Обязательные документы для собак</h3>
      <div class="doc-section">
        <h4><i class="fas fa-passport"></i> Ветеринарный паспорт:</h4>
        <ul>
          <li>Данные о чипе/клейме</li>
          <li>Все отметки о вакцинациях</li>
          <li>Результаты анализов</li>
        </ul>
      </div>

      <div class="doc-section">
        <h4><i class="fas fa-plane-departure"></i> Для путешествий:</h4>
        <ul>
          <li>Справка формы №1</li>
          <li>Анализ на антитела к бешенству</li>
          <li>Разрешение CITES для экзотических пород</li>
        </ul>
      </div>

      <div class="warning-box">
        <h5>❗ Важные нюансы:</h5>
        <ul>
          <li>Срок действия справки - 3-5 дней</li>
          <li>Требуется печать Россельхознадзора</li>
          <li>Перевод на английский для EU</li>
        </ul>
      </div>
    </div>
  `,
  "Документы и прививки кошек": `
    <div class="documents-checklist">
  <h3>📂 Обязательные документы для кошек</h3>

  <div class="doc-section">
    <h4><i class="fas fa-passport"></i> Ветеринарный паспорт:</h4>
    <ul>
      <li>Информация о чипе или клейме</li>
      <li>Все отметки о вакцинациях (особенно от бешенства)</li>
      <li>Результаты анализов (кровь, паразиты)</li>
    </ul>
  </div>

  <div class="doc-section">
    <h4><i class="fas fa-plane-departure"></i> Для поездок и путешествий:</h4>
    <ul>
      <li>Справка формы №1</li>
      <li>Анализ на антитела к вирусу бешенства</li>
      <li>Разрешение CITES (если порода редкая или экзотическая)</li>
    </ul>
  </div>

  <div class="warning-box">
    <h5>❗ Важные нюансы:</h5>
    <ul>
      <li>Срок действия справки — от 3 до 5 дней</li>
      <li>Обязательно наличие печати Россельхознадзора</li>
      <li>Перевод документов на английский язык для стран ЕС</li>
    </ul>
  </div>
</div>

  `,
// корм
  "Сухой корм vs натуральный для собак": `
    <div class="food-comparison">
      <h3>🍖 Выбор оптимального питания для собак</h3>
      <div class="comparison-grid">
        <div class="food-type dry-food">
          <h4><i class="fas fa-bone"></i> Сухой корм</h4>
          <div class="pros">
            <p>Преимущества:</p>
            <ul>
              <li>Длительный срок хранения</li>
              <li>Сбалансированный состав</li>
              <li>Удобство в поездках</li>
            </ul>
          </div>
          <div class="cons">
            <p>Риски:</p>
            <ul>
              <li>Дегидратация</li>
              <li>Аллергии</li>
              <li>Низкое качество дешёвых марок</li>
            </ul>
          </div>
        </div>

        <div class="food-type natural-food">
          <h4><i class="fas fa-carrot"></i> Натуральное питание</h4>
          <div class="pros">
            <p>Преимущества:</p>
            <ul>
              <li>Контроль качества</li>
              <li>Свежие ингредиенты</li>
              <li>Индивидуальная диета</li>
            </ul>
          </div>
          <div class="cons">
            <p>Риски:</p>
            <ul>
              <li>Дисбаланс питательных веществ</li>
              <li>Время на приготовление</li>
              <li>Сложности хранения</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="diet-tips">
        <h4>💡 Рекомендации ветеринаров:</h4>
        <ul>
          <li>Сочетание 75% корм + 25% натуралки</li>
          <li>Избегать смешивания типов питания</li>
          <li>Консультация нутрициолога</li>
        </ul>
      </div>
    </div>
  `,
  "Сухой корм vs натуральный для кошек": `
    <div class="food-comparison">
  <h3>🍖 Выбор оптимального питания для кошек</h3>
  <div class="comparison-grid">
    <div class="food-type dry-food">
      <h4><i class="fas fa-bone"></i> Сухой корм</h4>
      <div class="pros">
        <p>Преимущества:</p>
        <ul>
          <li>Удобство дозировки и хранения</li>
          <li>Помогает очищать зубы</li>
          <li>Сбалансирован по витаминам и минералам</li>
        </ul>
      </div>
      <div class="cons">
        <p>Риски:</p>
        <ul>
          <li>Недостаток жидкости — риск МКБ</li>
          <li>Аллергические реакции</li>
          <li>Зависимость от бренда и состава</li>
        </ul>
      </div>
    </div>

    <div class="food-type natural-food">
      <h4><i class="fas fa-carrot"></i> Натуральное питание</h4>
      <div class="pros">
        <p>Преимущества:</p>
        <ul>
          <li>Контроль за ингредиентами</li>
          <li>Меньше консервантов и добавок</li>
          <li>Гибкость в составлении рациона</li>
        </ul>
      </div>
      <div class="cons">
        <p>Риски:</p>
        <ul>
          <li>Сложность в обеспечении всех нутриентов</li>
          <li>Требует времени и знаний</li>
          <li>Риск пищевых отравлений при неправильной обработке</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="diet-tips">
    <h4>💡 Рекомендации ветеринаров:</h4>
    <ul>
      <li>Обязательно следить за потреблением воды</li>
      <li>Не смешивать корм и натуралку в одном приёме пищи</li>
      <li>Согласовывать рацион с ветеринаром или фелинологом</li>
    </ul>
  </div>
</div>

  `,
//график кормления
  "График кормления собак": `
    <div class="feeding-schedule">
      <h3>⏰ Идеальный режим питания для собак</h3>
      <div class="age-groups">
        <div class="age-group">
          <h4>Щенки <span class="age">2-6 мес</span></h4>
          <ul>
            <li>4-5 раз в день</li>
            <li>Интервал 3-4 часа</li>
            <li>Ночной перерыв 6-7 часов</li>
          </ul>
        </div>

        <div class="age-group">
          <h4>Подростки <span class="age">6-12 мес</span></h4>
          <ul>
            <li>3 раза в день</li>
            <li>Утреннее/обеденное/вечернее</li>
            <li>Порции увеличиваются на 25%</li>
          </ul>
        </div>

        <div class="age-group">
          <h4>Взрослые <span class="age">1+ лет</span></h4>
          <ul>
            <li>2 раза в день</li>
            <li>Равные промежутки</li>
            <li>Вечернее кормление обильнее</li>
          </ul>
        </div>
      </div>

      <div class="feeding-rules">
        <h4>📜 Золотые правила:</h4>
        <ol>
          <li>Постоянное место кормления</li>
          <li>Миска на уровне груди для крупных пород</li>
          <li>Не смешивать типы питания</li>
          <li>После еды - 1 час покоя</li>
        </ol>
      </div>
    </div>
  `,
  "График кормления кошек": `
    <div class="feeding-schedule">
  <h3>⏰ Идеальный режим питания для кошек</h3>
  <div class="age-groups">
    <div class="age-group">
      <h4>Котята <span class="age">2-6 мес</span></h4>
      <ul>
        <li>4-5 раз в день</li>
        <li>Интервал 3-4 часа</li>
        <li>Свежая вода всегда доступна</li>
      </ul>
    </div>

    <div class="age-group">
      <h4>Юниоры <span class="age">6-12 мес</span></h4>
      <ul>
        <li>3-4 раза в день</li>
        <li>С постепенным увеличением порции</li>
        <li>Плавный переход на взрослый корм</li>
      </ul>
    </div>

    <div class="age-group">
      <h4>Взрослые кошки <span class="age">1+ лет</span></h4>
      <ul>
        <li>2-3 раза в день</li>
        <li>По графику, в одно и то же время</li>
        <li>Контроль веса и порций</li>
      </ul>
    </div>
  </div>

  <div class="feeding-rules">
    <h4>📜 Золотые правила:</h4>
    <ol>
      <li>Свежая вода в отдельной миске</li>
      <li>Не ставить миску рядом с туалетом</li>
      <li>Избегать перекорма и угощений со стола</li>
      <li>Миску мыть ежедневно</li>
    </ol>
  </div>
</div>

  `,

  //породы
  "Немецкая овчарка": `
    <div class="breed-info">
      <div class="breed-header">
        <h2>🐕 Немецкая овчарка</h2>
        <img src="{{ ovcharka.jpg}}" alt="Немецкая овчарка" class="breed-img">
      </div>
      
      <h3>🌟 Характер</h3>
      <ul>
        <li>Интеллект: 5/5</li>
        <li>Активность: 4/5</li>
        <li>Дружелюбие: 3/5</li>
        <li>Охранные качества: 5/5</li>
      </ul>
      <p>Универсальная служебная порода. Предана хозяину, требует постоянной умственной нагрузки.</p>

      <h3>🎓 Дрессировка</h3>
      <div class="training-tips">
        <ol>
          <li>Начало занятий: 3-4 месяца</li>
          <li>Базовые команды за 2-3 недели</li>
          <li>Рекомендуемые курсы: ЗКС, обидиенс</li>
        </ol>
        <div class="warning-box">
          <p>⚠️ Не используйте жесткие методы! Склонны к упрямству при неправильном подходе</p>
        </div>
      </div>

      <h3>🍖 Питание</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Рекомендуемые корма</h4>
          <ul>
            <li>Royal Canin German Shepherd</li>
            <li>Hills Large Breed</li>
            <li>Acana Heritage</li>
          </ul>
        </div>
        <div class="type">
          <h4>Запрещенные продукты</h4>
          <ul>
            <li>Свинина</li>
            <li>Шоколад</li>
            <li>Лук и чеснок</li>
          </ul>
        </div>
      </div>
      <p class="highlight">Важно! Кормить 2-3 раза в день после прогулки. <a href="#" onclick="showContent('Профилактика заворота желудка'); return false;">Профилактика ЖКТ</a></p>

      <h3>🏥 Здоровье</h3>
      <table>
        <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
        <tr><td>Дисплазия суставов</td><td><a href="#" onclick="showContent('Профилактика дисплазии'); return false;">Смотреть меры</a></td><td>1-5 лет</td></tr>
        <tr><td>Дегенеративная миелопатия</td><td>Генетический тест</td><td>5+ лет</td></tr>
      </table>
    </div>
  `,

  "Самоед": `
    <div class="breed-info">
      <div class="breed-header">
        <h2>🐻❄️ Самоед</h2>
        <img src="samoyed.jpg" alt="Самоед" class="breed-img">
      </div>

      <h3>🌟 Характер</h3>
      <ul>
        <li>Интеллект: 4/5</li>
        <li>Активность: 3/5</li>
        <li>Дружелюбие: 5/5</li>
        <li>Охранные качества: 2/5</li>
      </ul>
      <p>"Улыбающаяся" порода с дружелюбным нравом. Отлично ладит с детьми и другими животными.</p>

      <h3>🎓 Дрессировка</h3>
      <div class="training-tips">
        <ol>
          <li>Игровой подход</li>
          <li>Короткие сессии (15-20 мин)</li>
          <li>Рекомендуемые курсы: фристайл, трюки</li>
        </ol>
        <p class="highlight">Лучшая мотивация: похвала и лакомства</p>
      </div>

      <h3>🍖 Питание</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Особые потребности</h4>
          <ul>
            <li>Омега-3 для шерсти</li>
            <li>Гипоаллергенные корма</li>
            <li>Свежая рыба 2 раза в неделю</li>
          </ul>
        </div>
      </div>
      <p><a href="#" onclick="showContent('Питание северных пород'); return false;">🔗 Особый рацион для арктических пород</a></p>

      <h3>🏥 Здоровье</h3>
      <table>
        <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
        <tr><td>Диабет</td><td>Контроль веса</td><td>3+ лет</td></tr>
        <tr><td>Глаукома</td><td>Регулярные осмотры</td><td>5+ лет</td></tr>
      </table>
    </div>
  `,

  "Хаски": `
    <div class="breed-info">
      <div class="breed-header">
        <h2>🐺 Хаски</h2>
        <img src="husky.jpg" alt="Хаски" class="breed-img">
      </div>

      <h3>🌟 Характер</h3>
      <ul>
        <li>Интеллект: 4/5</li>
        <li>Активность: 5/5</li>
        <li>Дружелюбие: 4/5</li>
        <li>Охранные качества: 1/5</li>
      </ul>
      <p>Энергичная ездовая собака. Требует интенсивных физических нагрузок и занятий.</p>

      <h3>🎓 Дрессировка</h3>
      <div class="training-tips">
        <ol>
          <li>Ранняя социализация</li>
          <li>Курсы каникросса</li>
          <li>Игры с поиском предметов</li>
        </ol>
        <div class="warning-box">
          <p>⚠️ Склонны к побегам! Обязательный курс послушания</p>
        </div>
      </div>

      <h3>🍖 Питание</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Рекомендуемые корма</h4>
          <ul>
            <li>ProPlan Sport</li>
            <li>Brit Care Endurance</li>
            <li>Grandorf Active</li>
          </ul>
        </div>
      </div>
      <p>Суточная норма: 20% больше обычного для активных пород</p>

      <h3>🏥 Здоровье</h3>
      <table>
        <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
        <tr><td>Эпилепсия</td><td>Генетический тест</td><td>1-3 года</td></tr>
        <tr><td>Катаракта</td><td>Витамины для глаз</td><td>5+ лет</td></tr>
      </table>
    </div>
  `,

  "Пудель": `
    <div class="breed-info">
      <div class="breed-header">
        <h2>🎀 Пудель</h2>
        <img src="poodle.jpg" alt="Пудель" class="breed-img">
      </div>

      <h3>🌟 Характер</h3>
      <ul>
        <li>Интеллект: 5/5</li>
        <li>Активность: 4/5</li>
        <li>Дружелюбие: 5/5</li>
        <li>Охранные качества: 2/5</li>
      </ul>
      <p>Умнейшая декоративная порода. Отлично подходит для квартирного содержания.</p>

      <h3>🎓 Дрессировка</h3>
      <div class="training-tips">
        <ol>
          <li>Обучаются с 2 месяцев</li>
          <li>Цирковая дрессура</li>
          <li>Фристайл и танцы</li>
        </ol>
        <p class="highlight">Лучшие в аджилити среди декоративных пород</p>
      </div>

      <h3>🍖 Питание</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Особые потребности</h4>
          <ul>
            <li>Гипоаллергенные корма</li>
            <li>Добавки для шерсти</li>
            <li>Контроль веса</li>
          </ul>
        </div>
      </div>

      <h3>🏥 Здоровье</h3>
      <table>
        <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
        <tr><td>Атрофия сетчатки</td><td>Генетический тест</td><td>С рождения</td></tr>
        <tr><td>Эпилепсия</td><td>Регулярные осмотры</td><td>1-5 лет</td></tr>
      </table>
    </div>
  `,

  "Дворняга": `
    <div class="breed-info">
      <div class="breed-header">
        <h2>🐶 Дворняга</h2>
        <img src="dvor.jpg" alt="Дворняга" class="breed-img">
      </div>

      <h3>🌟 Характер</h3>
      <ul>
        <li>Интеллект: 3-5/5</li>
        <li>Активность: 2-4/5</li>
        <li>Дружелюбие: 4/5</li>
        <li>Охранные качества: 3/5</li>
      </ul>
      <p>Уникальная смесь характеров. Часто обладают крепким здоровьем и адаптивностью.</p>

      <h3>🎓 Дрессировка</h3>
      <div class="training-tips">
        <ol>
          <li>Индивидуальный подход</li>
          <li>Тестирование склонностей</li>
          <li>Социализация с другими собаками</li>
        </ol>
      </div>

      <h3>🍖 Питание</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Рекомендации</h4>
          <ul>
            <li>Универсальные корма</li>
            <li>Натуральное питание</li>
            <li>Контроль аллергий</li>
          </ul>
        </div>
      </div>

      <h3>🏥 Здоровье</h3>
      <div class="warning-box">
        <p>⚠️ Обязателен ДНК-тест для выявления наследственных заболеваний</p>
      </div>
    </div>
  `,

  "Шотландец": `
  <div class="breed-info">
    <div class="breed-header">
      <h2>🐱 Шотландская вислоухая</h2>
      <img src="scottish.jpg" alt="Шотландская кошка" class="breed-img">
    </div>

    <h3>🌟 Характер</h3>
    <ul>
      <li>Интеллект: 4/5</li>
      <li>Активность: 3/5</li>
      <li>Ласковость: 5/5</li>
      <li>Шумность: 1/5</li>
    </ul>
    <p>Спокойная и ласковая кошка, отлично подходит для семьи с детьми и другими питомцами.</p>

    <h3>🎓 Воспитание</h3>
    <div class="training-tips">
      <ol>
        <li>Приучение к лотку с детства</li>
        <li>Игры с дразнилками</li>
        <li>Использование когтеточки</li>
      </ol>
    </div>

    <h3>🍖 Питание</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Рекомендуемые корма</h4>
        <ul>
          <li>Royal Canin British Shorthair</li>
          <li>Monge Indoor</li>
          <li>Now Fresh Adult Cat</li>
        </ul>
      </div>
    </div>
    <p>Склонны к перееданию — следите за порциями!</p>

    <h3>🏥 Здоровье</h3>
    <table>
      <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
      <tr><td>Остеохондродисплазия</td><td>Проверка родителей при покупке</td><td>1+ год</td></tr>
      <tr><td>Ожирение</td><td>Контроль рациона и активность</td><td>Любой возраст</td></tr>
    </table>
  </div>
`,

"Сиамский": `
  <div class="breed-info">
    <div class="breed-header">
      <h2>🐱 Сиамская кошка</h2>
      <img src="siamese.jpg" alt="Сиамская кошка" class="breed-img">
    </div>

    <h3>🌟 Характер</h3>
    <ul>
      <li>Интеллект: 5/5</li>
      <li>Активность: 5/5</li>
      <li>Ласковость: 3/5</li>
      <li>Шумность: 5/5</li>
    </ul>
    <p>Общительная, громкая и эмоциональная кошка, нуждается во внимании хозяина.</p>

    <h3>🎓 Воспитание</h3>
    <div class="training-tips">
      <ol>
        <li>Интерактивные игрушки</li>
        <li>Обучение трюкам</li>
        <li>Свободный доступ к лазалкам</li>
      </ol>
    </div>

    <h3>🍖 Питание</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Рекомендуемые корма</h4>
        <ul>
          <li>Royal Canin Siamese</li>
          <li>Acana Indoor Entree</li>
          <li>Farmina N&D</li>
        </ul>
      </div>
    </div>
    <p>Нужен рацион с высоким содержанием белка для поддержания мышц.</p>

    <h3>🏥 Здоровье</h3>
    <table>
      <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
      <tr><td>Астма</td><td>Уборка без агрессивной химии</td><td>2+ лет</td></tr>
      <tr><td>ЖКТ проблемы</td><td>Щадящее питание</td><td>Любой возраст</td></tr>
    </table>
  </div>
`,

"Сфинкс": `
  <div class="breed-info">
    <div class="breed-header">
      <h2>🐱 Сфинкс</h2>
      <img src="sphynx.jpg" alt="Сфинкс" class="breed-img">
    </div>

    <h3>🌟 Характер</h3>
    <ul>
      <li>Интеллект: 4/5</li>
      <li>Активность: 4/5</li>
      <li>Ласковость: 5/5</li>
      <li>Шумность: 2/5</li>
    </ul>
    <p>Любит тепло и внимание, требует постоянного контакта с человеком.</p>

    <h3>🎓 Воспитание</h3>
    <div class="training-tips">
      <ol>
        <li>Обустроенное тёплое место</li>
        <li>Мягкие игрушки</li>
        <li>Соблюдение режима купания</li>
      </ol>
      <div class="warning-box">
        <p>⚠️ Чувствительна к холоду — избегайте сквозняков!</p>
      </div>
    </div>

    <h3>🍖 Питание</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Рекомендуемые корма</h4>
        <ul>
          <li>Royal Canin Sphynx</li>
          <li>Orijen Cat & Kitten</li>
          <li>Hill's Sensitive Skin</li>
        </ul>
      </div>
    </div>
    <p>Высокий обмен веществ требует калорийного корма.</p>

    <h3>🏥 Здоровье</h3>
    <table>
      <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
      <tr><td>Кожные воспаления</td><td>Регулярное купание</td><td>С раннего возраста</td></tr>
      <tr><td>Кардиомиопатия</td><td>Плановые УЗИ</td><td>3+ лет</td></tr>
    </table>
  </div>
`,

"Персидский": `
  <div class="breed-info">
    <div class="breed-header">
      <h2>🐱 Персидская кошка</h2>
      <img src="persian.jpg" alt="Персидская кошка" class="breed-img">
    </div>

    <h3>🌟 Характер</h3>
    <ul>
      <li>Интеллект: 3/5</li>
      <li>Активность: 2/5</li>
      <li>Ласковость: 4/5</li>
      <li>Шумность: 1/5</li>
    </ul>
    <p>Нежная и спокойная порода, предпочитает уют и размеренную жизнь.</p>

    <h3>🎓 Воспитание</h3>
    <div class="training-tips">
      <ol>
        <li>Регулярное расчесывание</li>
        <li>Приучение к чистке глаз</li>
        <li>Мягкие игрушки и туннели</li>
      </ol>
      <div class="warning-box">
        <p>⚠️ Очень чувствительны к загрязнению глаз — протирать ежедневно</p>
      </div>
    </div>

    <h3>🍖 Питание</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Рекомендуемые корма</h4>
        <ul>
          <li>Royal Canin Persian</li>
          <li>ProNature Original</li>
          <li>Happy Cat Sensitive</li>
        </ul>
      </div>
    </div>
    <p>Нужны корма, способствующие выведению шерсти из желудка.</p>

    <h3>🏥 Здоровье</h3>
    <table>
      <tr><th>Заболевание</th><th>Профилактика</th><th>Возраст риска</th></tr>
      <tr><td>Слезотечение</td><td>Ежедневная гигиена глаз</td><td>Постоянно</td></tr>
      <tr><td>Поликистоз почек</td><td>УЗИ и генетические тесты</td><td>3+ лет</td></tr>
    </table>
  </div>
`,


  // Новые разделы по уходу
  "Стрижка когтей у собак": `
    <div class="content-box">
      <h3>✂️ Правильная стрижка когтей</h3>
      <div class="columns-2">
        <div>
          <h4>Инструменты:</h4>
          <ul>
            <li>Гильотинные кусачки</li>
            <li>Электрическая когтеточка</li>
            <li>Кровоостанавливающий порошок</li>
          </ul>
        </div>
        <div>
          <h4>Пошаговая инструкция:</h4>
          <ol>
            <li>Фиксация лапы</li>
            <li>Определение живой части (пульпы)</li>
            <li>Срез под углом 45°</li>
            <li>Обработка пилкой</li>
          </ol>
        </div>
      </div>
      <div class="warning-box">
        <p>⚠️ Избегайте темных когтей у собак с черной пигментацией - используйте фонарик для подсветки</p>
      </div>
    </div>
  `,
  "Стрижка когтей у кошек": `
  <div class="content-box">
    <h3>✂️ Правильная стрижка когтей</h3>
    <div class="columns-2">
      <div>
        <h4>Инструменты:</h4>
        <ul>
          <li>Гильотинные кусачки для когтей</li>
          <li>Когтерез с лезвиями</li>
          <li>Кровоостанавливающий порошок (для экстренных случаев)</li>
        </ul>
      </div>
      <div>
        <h4>Пошаговая инструкция:</h4>
        <ol>
          <li>Забезпечьте кошке комфортную позу, удерживая лапу.</li>
          <li>Определите живую часть когтя (пульпу) — она выглядит как розовая область внутри когтя.</li>
          <li>Осторожно срежьте только прозрачную часть когтя, избегая попадания в пульпу.</li>
          <li>После стрижки обработайте края пилочкой для сглаживания.</li>
        </ol>
      </div>
    </div>
    <div class="warning-box">
      <p>⚠️ Будьте осторожны при стрижке — избегайте попадания в пульпу, чтобы не вызвать боль или кровотечение.</p>
    </div>
  </div>
`,


  "Уход за подушечками у собак": `
    <div class="content-box">
      <h3>🐾 Защита подушечек лап</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Проблемы и решения:</h4>
          <table>
            <tr><th>Проблема</th><th>Лечение</th></tr>
            <tr><td>Трещины</td><td>Воск Paw Wax</td></tr>
            <tr><td>Ожоги</td><td>Крем с пантенолом</td></tr>
            <tr><td>Грибок</td><td>Антисептическая обработка</td></tr>
          </table>
        </div>
        <div class="type">
          <h4>Профилактика:</h4>
          <ul>
            <li>Ежедневный осмотр</li>
            <li>Мытье после прогулок</li>
            <li>Увлажняющий бальзам</li>
          </ul>
        </div>
      </div>
      <p class="highlight">При покраснениях обратитесь к <a href="#" onclick="showContent('Как подготовить щенка'); return false;">ветеринару</a></p>
    </div>
  `,
  "Уход за подушечками у кошек": `
  <div class="content-box">
    <h3>🐾 Защита подушечек лап</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Проблемы и решения:</h4>
        <table>
          <tr><th>Проблема</th><th>Лечение</th></tr>
          <tr><td>Трещины</td><td>Воск для лап Petcare</td></tr>
          <tr><td>Ожоги</td><td>Крем с пантенолом</td></tr>
          <tr><td>Грибок</td><td>Антисептическая обработка</td></tr>
        </table>
      </div>
      <div class="type">
        <h4>Профилактика:</h4>
        <ul>
          <li>Ежедневный осмотр лап</li>
          <li>Мытье лап после прогулок</li>
          <li>Использование увлажняющего крема</li>
        </ul>
      </div>
    </div>
    <p class="highlight">При покраснениях или других симптомах обратитесь к <a href="#" onclick="showContent('Как подготовить кошку'); return false;">ветеринару</a></p>
  </div>
`,
  "Игры для щенков": `
    <div class="content-box">
      <h3>🐾 Активность для малышей</h3>
      <div class="pros-cons">
        <div class="type">
          <h4>Рекомендуемые игры:</h4>
          <ul>
            <li>Перетягивание мягкой веревки</li>
            <li>Поиск лакомств в мячике</li>
            <li>Прятки с игрушками</li>
          </ul>
        </div>
        <div class="type">
          <h4>Правила безопасности:</h4>
          <ul>
            <li>Не более 10 минут непрерывной игры</li>
            <li>Избегать прыжков с высоты</li>
            <li>Использовать мягкие игрушки</li>
          </ul>
        </div>
      </div>
      <div class="warning-box">
        <p>⚠️ Сочетайте с <a href="#" onclick="showContent('График кормления'); return false;">правильным питанием</a> для растущего организма</p>
      </div>
    </div>
  `,

  "Игры для котят": `
  <div class="content-box">
    <h3>🐾 Активность для малышей</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Рекомендуемые игры:</h4>
        <ul>
          <li>Игры с перышками на палочке</li>
          <li>Прятки с игрушками</li>
          <li>Бег за лазерной указкой</li>
        </ul>
      </div>
      <div class="type">
        <h4>Правила безопасности:</h4>
        <ul>
          <li>Не более 15 минут активной игры</li>
          <li>Избегать игр с мелкими предметами, которые кошка может проглотить</li>
          <li>Следить за тем, чтобы игрушки были безопасными</li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <p>⚠️ Сочетайте с <a href="#" onclick="showContent('График кормления'); return false;">правильным питанием</a> для растущего организма</p>
    </div>
  </div>
`,


  "Тренировки для взрослых собак": `
    <div class="content-box">
      <h3>🏋️ Физические нагрузки</h3>
      <table>
        <tr><th>Порода</th><th>Рекомендуемая активность</th><th>Длительность</th></tr>
        <tr><td>Овчарки</td><td>Аджилити, апортировка</td><td>60-90 мин/день</td></tr>
        <tr><td>Хаски</td><td>Бег в упряжке, плавание</td><td>120+ мин/день</td></tr>
        <tr><td>Пудели</td><td>Фрисби, танцы</td><td>45-60 мин/день</td></tr>
      </table>
      
      <div class="training-tips">
        <h4>📌 Советы тренеров:</h4>
        <ol>
          <li>Разминка 5-10 минут перед нагрузкой</li>
          <li>Чередование видов активности</li>
          <li>Контроль пульса после упражнений</li>
        </ol>
      </div>
    </div>
  `,

  "Развлечения для взрослых кошек": `
  <div class="content-box">
    <h3>🎉 Развлечения для кошек</h3>
    <table>
      <tr><th>Тип активности</th><th>Рекомендуемые игры</th><th>Длительность</th></tr>
      <tr><td>Игры с игрушками</td><td>Лазерная указка, мячики</td><td>10-15 мин/день</td></tr>
      <tr><td>Взаимодействие с человеком</td><td>Перетягивание веревки, игры с перышками</td><td>20-30 мин/день</td></tr>
      <tr><td>Сложные задачи</td><td>Головоломки с лакомствами</td><td>15-20 мин/день</td></tr>
    </table>
    
    <div class="training-tips">
      <h4>📌 Советы владельцам кошек:</h4>
      <ol>
        <li>Используйте разные виды игрушек для разнообразия</li>
        <li>Игры с кошкой должны быть спокойными, избегайте агрессивных движений</li>
        <li>После активных игр позвольте кошке отдохнуть в своем любимом месте</li>
      </ol>
    </div>
  </div>
`,

    "Основы послушания собак": `
<div class="content-box">
  <h3>📚 Базовые команды</h3>
  <div class="training-tips">
    <div class="step">
      <div class="step-number">1</div>
      <h4>Первые недели:</h4>
      <ul>
        <li>Кличка + поощрение</li>
        <li>"Ко мне" с лакомством</li>
        <li>"Место" с лежанкой</li>
      </ul>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <h4>2-4 месяца:</h4>
      <ul>
        <li>"Сидеть" перед кормлением</li>
        <li>"Фу" с отвлекающими предметами</li>
        <li>"Рядом" на коротких прогулках</li>
      </ul>
    </div>
  </div>
  <p class="highlight">Используйте <a href="#" onclick="showContent('График кормления'); return false;">лакомства из рациона</a> для мотивации</p>
</div>
`,

"Приучение к туалету собак": `
<div class="content-box">
  <h3>🚽 Методы приучения</h3>
  <div class="pros-cons">
    <div class="type">
      <h4>Правила успеха:</h4>
      <ul>
        <li>Выводить после сна/еды</li>
        <li>Хвалить за успех</li>
        <li>Использовать пелёнки-метки</li>
      </ul>
    </div>
    <div class="type">
      <h4>Ошибки:</h4>
      <ul>
        <li>Наказание после "проступка"</li>
        <li>Частая смена места туалета</li>
        <li>Использование аммиачных средств</li>
      </ul>
    </div>
  </div>
  <div class="warning-box">
    <p>⚠️ При частых "авариях" проверьте <a href="#" onclick="showContent('Профилактика заболеваний'); return false;">здоровье щенка</a></p>
  </div>
</div>
`,
"Приучение к лотку кошек": `
  <div class="content-box">
    <h3>🚽 Методы приучения</h3>
    <div class="pros-cons">
      <div class="type">
        <h4>Правила успеха:</h4>
        <ul>
          <li>Разместите лоток в тихом и доступном месте</li>
          <li>Почаще меняйте наполнитель</li>
          <li>Хвалите за успехи</li>
        </ul>
      </div>
      <div class="type">
        <h4>Ошибки:</h4>
        <ul>
          <li>Частая смена места расположения лотка</li>
          <li>Использование слишком мелкого или крупного наполнителя</li>
          <li>Неправильное очищение лотка</li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <p>⚠️ Если проблемы с лотком продолжаются, обратитесь к <a href="#" onclick="showContent('Профилактика заболеваний'); return false;">ветеринару</a></p>
    </div>
  </div>
`,


"Социализация собак": `
<div class="content-box">
  <h3>🌍 Адаптация к миру</h3>
  <table>
    <tr><th>Возраст</th><th>Задачи</th><th>Примеры</th></tr>
    <tr><td>3-5 недель</td><td>Знакомство с людьми</td><td>Разные голоса/возрасты</td></tr>
    <tr><td>6-8 недель</td><td>Контакты с животными</td><td>Дружелюбные кошки/собаки</td></tr>
    <tr><td>9-12 недель</td><td>Городские звуки</td><td>Транспорт, лифт, фены</td></tr>
  </table>
  
  <div class="training-tips">
    <h4>📌 Важные правила:</h4>
    <ol>
      <li>Постепенное увеличение нагрузки</li>
      <li>Положительное подкрепление</li>
      <li>Избегание стрессовых ситуаций</li>
    </ol>
  </div>
</div>
`
  };

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
    document.getElementById('burger').classList.toggle('hidden');
  }

  function toggleSubtopics(button) {
    const section = button.parentElement;
    section.classList.toggle('active');
  }

  function showContent(title) {
    document.getElementById('content-title').innerHTML = title;
    document.getElementById('content').innerHTML = contentMap[title] || 'Информация по теме пока недоступна.';
    toggleSidebar();
  }

  function applyFilters() {
    const search = document.getElementById('tagSearch').value.trim().toLowerCase();
    const age = document.getElementById('ageFilter').value;
    const breed = document.getElementById('breedFilter').value;

    const allButtons = document.querySelectorAll('.subtopics button');

    allButtons.forEach(button => {
        const tags = (button.getAttribute('data-tags') || '').toLowerCase();
        const btnAge = button.getAttribute('data-age') || '';
        const btnBreeds = (button.getAttribute('data-breed') || '').split(',').map(b => b.trim().toLowerCase());

        const matchTag = !search || tags.includes(search);
        const matchAge = !age || age === btnAge;
        const matchBreed = !breed || btnBreeds.includes(breed.toLowerCase()) || btnBreeds.includes('все');

        button.style.display = (matchTag && matchAge && matchBreed) ? 'block' : 'none';
    });

    document.querySelectorAll('.menu-section').forEach(section => {
        const hasVisible = Array.from(section.querySelectorAll('.subtopics button'))
            .some(btn => btn.style.display !== 'none');
        
        section.style.display = hasVisible ? 'block' : 'none';
        if (hasVisible) section.classList.add('active');
    });
  }