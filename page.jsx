const jobs=[
["Менеджер по продажам","Грозный","45 000–70 000 ₽","Без опыта"],
["Водитель категории B","Грозный","60 000–90 000 ₽","От 1 года"],
["Администратор","Грозный","40 000–55 000 ₽","От 1 года"],
["Электромонтёр","Аргун","50 000–80 000 ₽","От 2 лет"],
["Продавец-консультант","Грозный","35 000–50 000 ₽","Без опыта"],
["Бухгалтер","Грозный","55 000–75 000 ₽","От 2 лет"]
];
export default function Home(){
return <div>
<header><div className="brand"><strong>Работа</strong><em>Рядом</em><small>ГРОЗНЫЙ · ЧЕЧНЯ · РОССИЯ</small></div><nav><a>Вакансии</a><a>Резюме</a><a>Работодателям</a><a>О проекте</a><button className="ghost">Войти</button><button>Регистрация</button></nav></header>
<section className="hero"><div className="heroText"><label>РАБОТА В ГРОЗНОМ И ЧЕЧЕНСКОЙ РЕСПУБЛИКЕ</label><h1>Найди работу<br/><span>рядом.</span></h1><p>Удобный поиск вакансий, проверенные работодатели и возможности для роста — сначала в Грозном, затем по всей Чечне и России.</p></div><div className="search"><input placeholder="Должность, профессия или компания"/><select><option>Грозный</option><option>Чечня</option><option>Россия</option></select><select><option>Все категории</option><option>Продажи</option><option>Строительство</option><option>Транспорт</option><option>IT</option></select><button>Найти</button></div><div className="quick">Популярное: <b>водитель</b><b>продавец</b><b>строитель</b><b>бухгалтер</b><b>медсестра</b></div></section>
<section className="stats"><div><b>Грозный</b><span>главный регион</span></div><div><b>Чечня</b><span>вакансии по республике</span></div><div><b>Россия</b><span>следующий масштаб</span></div><div><b>24/7</b><span>поиск с телефона</span></div></section>
<section className="content"><div className="main"><div className="title"><h2>Свежие вакансии</h2><a>Смотреть все →</a></div><div className="filters"><button>Все вакансии</button><span>По зарплате</span><span>По графику</span><span>Без опыта</span></div>{jobs.map(j=><article className="job"><div className="logoBox">{j[0][0]}</div><div className="jobInfo"><h3>{j[0]}</h3><p>{j[1]} · Полный день · {j[3]}</p><small>Работодатель на платформе</small></div><strong>{j[2]}</strong><i>♡</i></article>)}</div>
<aside><div className="panel dark"><h3>Работодателям</h3><p>Размещайте вакансии и находите сотрудников в Грозном и Чечне.</p><button>Разместить вакансию</button></div><div className="panel"><h3>Соискателям</h3><p>Создайте резюме и получайте предложения от работодателей.</p><button>Создать резюме</button></div><div className="panel numbers"><b>РаботаРядом</b><span>Платформа, созданная для местного рынка труда.</span><hr/><span>✓ Модерация вакансий</span><span>✓ Удобный отклик</span><span>✓ Мобильная версия</span></div></aside></section>
<footer><div><strong>Работа<span>Рядом</span></strong><p>Ближе к твоим возможностям.</p></div><div><b>Соискателям</b><p>Вакансии<br/>Резюме<br/>Избранное</p></div><div><b>Работодателям</b><p>Разместить вакансию<br/>Кабинет компании<br/>Продвижение</p></div><div><b>Проект</b><p>О нас<br/>Помощь<br/>Контакты</p></div></footer>
</div>}