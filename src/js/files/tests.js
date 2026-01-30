(() => {
  const quizRoot = document.getElementById('quizArea');
  const genBtn = document.getElementById('generateBtn');
  const checkBtn = document.getElementById('checkBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (!quizRoot || !genBtn || !checkBtn || !resetBtn) return;

  const BANK_SINGLE = [
    { q: "Коли почалася Громадянська війна в Іспанії?", choices: ["17 липня 1936 року", "12 квітня 1937 року", "1 січня 1936 року"], answerIndex: 0 },
    { q: "Яка організація координувала набір добровольців до інтербригад?", choices: ["Комінтерн", "ОУН", "КПЗУ"], answerIndex: 0 },
    { q: "Скільки українців орієнтовно воювало в лавах республіканців?", choices: ["близько 2000", "понад 10000", "менше 100"], answerIndex: 0 },
    { q: "Яка рота складалася переважно з українців у складі XIII інтербригади?", choices: ["Рота імені Тараса Шевченка", "Рота імені Хмельницького", "Рота імені Петлюри"], answerIndex: 0 },
    { q: "Хто командував XIII інтернаціональною бригадою?", choices: ["Генерал Лука", "Генерал Батов", "Генерал Копієц"], answerIndex: 1 },
    { q: "Де рота імені Тараса Шевченка пройшла бойове хрещення?", choices: ["під Брунете", "під Сарагосою", "під Валенсією"], answerIndex: 0 },
    { q: "Коли загинув Юрій Великанович?", choices: ["28 вересня 1938 року", "14 вересня 1937 року", "17 липня 1936 року"], answerIndex: 0 },
    { q: "Яке місто було центром республіканського опору протягом війни?", choices: ["Мадрид", "Барселона", "Севілья"], answerIndex: 0 },
    { q: "Хто редагував газету «Боротьба»?", choices: ["Юрій Великанович", "Микола Шинкаренко", "Володимир Бєлинський"], answerIndex: 0 },
    { q: "Який український доброволець став особистим водієм радника генерала Батова?", choices: ["Семен Побережник", "Антон Яремчук", "Василь Клименко"], answerIndex: 0 },
    { q: "Хто з українців воював у складі республіканських танкових частин?", choices: ["Іван Кудря", "Юрій Великанович", "Микола Шинкаренко"], answerIndex: 0 },
    { q: "Який рік став роком розпуску КПЗУ Комінтерном?", choices: ["1938", "1936", "1934"], answerIndex: 0 },
    { q: "Який український генерал приєднався до франкістів у 1937 році?", choices: ["Микола Шинкаренко", "Володимир Бєлинський", "Антон Яремчук"], answerIndex: 0 },
    { q: "Де Шинкаренко був поранений у голову?", choices: ["Пенья-де-Амбота", "Брунете", "Мадрид"], answerIndex: 0 },
    { q: "Хто з українців служив у франкістській авіації?", choices: ["Всеволод Марченко", "Костянтин Гончаренко", "Юрій Великанович"], answerIndex: 0 },
    { q: "Де працював Марченко до війни?", choices: ["директором аеропорту «Барахас»", "інструктором пілотів у Марокко", "льотчиком у Португалії"], answerIndex: 0 },
    { q: "Коли Всеволод Марченко загинув?", choices: ["14 вересня 1937 року", "12 лютого 1937 року", "20 липня 1938 року"], answerIndex: 0 },
    { q: "До якого легіону прагнув вступити Володимир Бєлинський?", choices: ["«Чорні стріли»", "«Рекетес»", "«Блакитна дивізія»"], answerIndex: 0 },
    { q: "Скільки разів був поранений Микола Шинкаренко?", choices: ["6", "3", "1"], answerIndex: 0 },
    { q: "Який результат війни для Іспанії?", choices: ["Перемога франкістів", "Перемога республіканців", "Компромісна угода"], answerIndex: 0 }
  ];

  const BANK_MULTI = [
    { q: "Які країни допомагали республіканцям?", choices: ["СРСР", "Мексика", "Франція", "Німеччина", "Італія"], correct: [0, 1, 2] },
    { q: "Які держави підтримували Франко?", choices: ["Німеччина", "Італія", "Португалія", "СРСР", "Польща"], correct: [0, 1, 2] },
    { q: "Які українські формування або підрозділи воювали за республіканців?", choices: ["Рота імені Тараса Шевченка", "Інтербригади", "Блакитна дивізія", "Легіон «Чорні стріли»", "Рекетес"], correct: [0, 1] },
    { q: "Які риси були властиві учасникам роти імені Тараса Шевченка?", choices: ["Антифашистські переконання", "Походження з Західної України", "Більшість із Канади", "Частина — члени КПЗУ", "Націоналістична ідеологія"], correct: [0, 1, 3] },
    { q: "Які бої стали ключовими для українських республіканців?", choices: ["Битва під Брунете", "Оборона Мадрида", "Наступ під Сарагосою", "Битва за Терель", "Штурм Більбао"], correct: [0, 1] },
    { q: "Які функції виконували українці у республіканських підрозділах?", choices: ["командири взводів", "редактори газет", "медики", "снайпери", "перекладачі"], correct: [0, 1, 3] },
    { q: "Які ідеї мотивували українців вступати до лав республіканців?", choices: ["антифашизм", "міжнародна солідарність", "комуністичні переконання", "бажання здобути бойовий досвід", "підтримка Франко"], correct: [0, 1, 2, 3] },
    { q: "Які українці згадані як загиблі в Іспанії?", choices: ["Юрій Великанович", "Всеволод Марченко", "Костянтин Гончаренко", "Микола Шинкаренко", "Антон Яремчук"], correct: [0, 1, 2] },
    { q: "Які прізвища українців зустрічаються серед записаних як «ruso»?", choices: ["Гончаренко", "Клименко", "Двойченко", "Яремчук", "Кривошия"], correct: [0, 1, 2, 4] },
    { q: "Які характеристики були притаманні організації «Рекетес»?", choices: ["традиціоналістичний рух", "формувався в Наваррі", "гасло «За Бога, за Батьківщину й Короля!»", "комуністичне підпорядкування", "українське походження"], correct: [0, 1, 2] },
    { q: "Які українці воювали на боці Франко?", choices: ["Микола Шинкаренко", "Всеволод Марченко", "Володимир Бєлинський", "Костянтин Гончаренко", "Юрій Великанович"], correct: [0, 1, 2, 3] },
    { q: "Які події пов’язані з Шинкаренком?", choices: ["прибув до Іспанії у лютому 1937 року", "поранений під Пенья-де-Амбота", "служив у Легіоні «Чорні стріли»", "отримав іспанське громадянство", "загинув 1938 року"], correct: [0, 1, 3] },
    { q: "Які відомості подає лист Бєлинського?", choices: ["боровся з комунізмом з 1919 року", "просив прийняти до легіону", "служив у Марокко", "прибув восени 1937 року", "загинув під Більбао"], correct: [0, 1, 2, 3] },
    { q: "Які відповіді містила телеграма штабу Франко?", choices: ["відмовлено через статус іноземця", "повернено документи", "призначено звання лейтенанта", "дата — 29 липня 1938 року", "дозвіл на службу у Марокко"], correct: [0, 1, 3] },
    { q: "Які українці згадані серед льотчиків і авіаторів?", choices: ["Всеволод Марченко", "Антон Яремчук", "Микола Шинкаренко", "Костянтин Гончаренко", "Гайя Гонсалес"], correct: [0, 1] },
    { q: "Які події стали доленосними для республіканських українців у 1938 році?", choices: ["розпуск інтербригад", "виведення роти ім. Шевченка з фронту", "загибель Великановича", "відступ республіканців з Каталонії", "наступ на Арагон"], correct: [0, 1, 3] },
    { q: "Які риси були властиві українцям-франкістам?", choices: ["антикомунізм", "участь колишніх білогвардійців", "націоналістичні переконання", "служба в «Рекетес»", "підтримка республіки"], correct: [0, 1, 2, 3] },
    { q: "Які види діяльності згадані серед українців у Іспанії?", choices: ["військова служба", "журналістика", "постачання зброї", "медична допомога", "викладання в авіашколі"], correct: [0, 1, 3, 4] },
    { q: "Які українці воювали у Другій світовій після іспанських подій?", choices: ["Костянтин Гончаренко", "Всеволод Марченко", "Микола Шинкаренко", "Юрій Великанович", "Володимир Бєлинський"], correct: [0, 2, 4] },
    { q: "Які міста пов’язані з діяльністю українських франкістів?", choices: ["Бургос", "Сантандер", "Мадрид", "Толедо", "Севілья"], correct: [0, 1] }
  ];

  const BANK_TEXT = [
    { q: "Назвіть точну дату початку війни.", answer: ["17 липня 1936", "17.07.1936"] },
    { q: "Як називалася українська рота в XIII інтербригаді?", answer: ["Рота імені Тараса Шевченка", "рота імені Тараса Шевченка"] },
    { q: "У якому бою рота Шевченка отримала бойове хрещення?", answer: ["Брунете", "битва під Брунете"] },
    { q: "Назвіть редактора газети «Боротьба».", answer: ["Юрій Великанович", "Великанович"] },
    { q: "Укажіть рік загибелі Юрія Великановича.", answer: ["1938"] },
    { q: "Назвіть одного з українців, які воювали у радянських інтербригадних частинах.", answer: ["Іван Кудря", "Кудря"] },
    { q: "Хто був особистим водієм радника генерала Батова?", answer: ["Семен Побережник", "Побережник"] },
    { q: "Укажіть рік розпуску КПЗУ.", answer: ["1938"] },
    { q: "Коли Микола Шинкаренко прибув до Іспанії?", answer: ["12 лютого 1937", "12.02.1937"] },
    { q: "У бою під яким містом був поранений Шинкаренко?", answer: ["Пенья-де-Амбота", "Пенья де Амбота"] },
    { q: "Скільки разів був поранений Микола Шинкаренко?", answer: ["6", "6 разів", "шість"] },
    { q: "Назвіть українського льотчика у військах Франко.", answer: ["Всеволод Марченко", "Марченко"] },
    { q: "Укажіть дату загибелі Всеволода Марченка.", answer: ["14 вересня 1937", "14.09.1937"] },
    { q: "До якого легіону прагнув вступити Володимир Бєлинський?", answer: ["Чорні стріли", "Легіон Чорні стріли"] },
    { q: "Назвіть одне з українських прізвищ серед записаних як «ruso».", answer: ["Гончаренко", "Клименко", "Двойченко"] },
    { q: "Укажіть місто, звідки Бєлинський написав свій лист.", answer: ["Сантандер"] },
    { q: "Назвіть дату телеграми штабу Франко у відповідь Бєлинському.", answer: ["29 липня 1938", "29.07.1938"] },
    { q: "Хто організував нічну ескадрилью бомбардувальників «U-52»?", answer: ["Гайя Гонсалес", "Гонсалес"] },
    { q: "Назвіть прапорщика, який загинув у складі «Блакитної дивізії».", answer: ["Костянтин Гончаренко", "Гончаренко"] },
    { q: "Як називалося мілітаризоване об’єднання, до якого вступали колишні бійці УНР у Іспанії?", answer: ["Рекетес", "Requetes"] }
  ];

  const $ = s => document.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const normalize = s => s.trim().toLowerCase();

  function split3(n) {
    const base = Math.floor(n / 3);
    const rem = n % 3;
    const parts = [base, base, base];
    const idx = [0, 1, 2];
    shuffle(idx);
    for (let i = 0; i < rem; i++) parts[idx[i]]++;
    return parts;
  }

  let currentQuiz = [];
  const pick = (bank, n) => shuffle([...bank]).slice(0, n);

  function generateQuiz() {
    const countEl = document.getElementById('count');
    const n = countEl ? (+countEl.value || 9) : 9;

    const [a, b, c] = split3(n);

    const partA = pick(BANK_SINGLE, a).map(it => {
      const mixed = it.choices.map((txt, i) => ({
        txt,
        isCorrect: i === it.answerIndex
      }));

      shuffle(mixed);

      return {
        type: 'A',
        q: it.q,
        choices: mixed.map(m => m.txt),
        answerIndex: mixed.findIndex(m => m.isCorrect)
      };
    });

    const partB = pick(BANK_MULTI, b).map(it => {
      let options = it.choices.map((txt, i) => ({
        text: txt,
        isCorrect: it.correct.includes(i)
      }));

      shuffle(options);

      return {
        type: 'B',
        q: it.q,
        choices: options.map(o => o.text),
        correct: options.reduce((acc, o, i) => (o.isCorrect ? acc.concat(i) : acc), [])
      };
    });
    
    const partC = pick(BANK_TEXT, c).map(it => ({ type: 'C', ...it }));

    currentQuiz = shuffle([...partA, ...partB, ...partC]);
    renderQuiz();

    checkBtn.disabled = false;
    resetBtn.disabled = false;
    document.getElementById('resultBox').textContent = '';
  }

  function renderQuiz() {
    const html = currentQuiz.map((it, qi) => {
      const body =
        it.type === 'A'
          ? it.choices.map((t, i) =>
            `<label class="choice">
                <input type="radio" name="q${qi}" value="${i}">
                <span class="opt-text">${t}</span>
              </label>`
          ).join('')
          : it.type === 'B'
            ? it.choices.map((t, i) =>
              `<label class="choice">
                <input type="checkbox" name="q${qi}" value="${i}">
                <span class="opt-text">${t}</span>
              </label>`
            ).join('')
            : `<input class="text-answer" type="text" name="q${qi}" placeholder="Введіть відповідь">`;

      return `<div class="question">
        <p class="q-title">${qi + 1}. ${it.q}</p>
        <div class="choices">${body}</div>
      </div>`;
    }).join('');

    quizRoot.innerHTML = html;
  }

  function checkAnswers() {
    $$('label.correct, label.incorrect, input.text-answer.correct, input.text-answer.incorrect')
      .forEach(el => el.classList.remove('correct', 'incorrect'));

    let score = 0;

    currentQuiz.forEach((it, qi) => {
      if (it.type === 'A') {
        const inputs = $$(`input[name="q${qi}"]`);
        const picked = inputs.find(i => i.checked);
        if (picked) {
          const v = +picked.value;
          if (v === it.answerIndex) {
            score++;
            picked.parentElement.classList.add('correct');
          } else {
            picked.parentElement.classList.add('incorrect');
            inputs[it.answerIndex]?.parentElement.classList.add('correct');
          }
        } else {
          inputs[it.answerIndex]?.parentElement.classList.add('correct');
        }
      }

      else if (it.type === 'B') {
        const inputs = $$(`input[name="q${qi}"]`);
        const selected = inputs.reduce((acc, i) => (i.checked ? acc.concat(+i.value) : acc), []);
        const correct = new Set(it.correct);
        const ok = selected.length && selected.length === correct.size && selected.every(v => correct.has(v));
        inputs.forEach((inp, i) => {
          const lbl = inp.parentElement;
          if (correct.has(i)) lbl.classList.add('correct');
          else if (inp.checked) lbl.classList.add('incorrect');
        });
        if (ok) score++;
      }

      else if (it.type === 'C') {
        const inp = document.querySelector(`input[name="q${qi}"]`);
        const ok = it.answer.some(a => normalize(a) === normalize(inp.value));
        inp.classList.add(ok ? 'correct' : 'incorrect');
        if (ok) score++;
      }
    });

    const total = currentQuiz.length;
    const percent = Math.round((score / total) * 100);
    const msg =
      percent >= 90 ? 'Відмінно!' :
        percent >= 75 ? 'Добре!' :
          percent >= 50 ? 'Зараховано' : 'Спробуйте ще раз';

    const box = document.getElementById('resultBox');
    box.innerHTML = `Результат: <strong>${score} / ${total}</strong> (${percent}%). ${msg}`;
    box.style.color = percent >= 60 ? 'var(--ok)' : 'var(--bad)';
  }

  function resetQuiz() {
    currentQuiz = [];
    quizRoot.innerHTML = '';
    document.getElementById('resultBox').textContent = '';
    checkBtn.disabled = true;
    resetBtn.disabled = true;
  }

  genBtn.addEventListener('click', generateQuiz);
  checkBtn.addEventListener('click', checkAnswers);
  resetBtn.addEventListener('click', resetQuiz);
})();