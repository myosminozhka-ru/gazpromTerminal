import Glide from "@glidejs/glide";
const items = [
  {
    id: 1,
    name: "Тотальная идентификация и AR/VR",
    left: 49,
    top: 26,
    open: false,
    showVideo: false,
    tabs: [
      {
        name: "Тотальная идентификация",
        list: [
          "Идентификация материалов и оборудования с помощью штрих- или QR-кодов",
          "Ускорение инвентаризации",
          "Трекинг материалов и оборудования от производства до перевода со склада в эксплуатацию",
        ],
      },
      {
        name: "AR/VR",
        list: [
          "Очки дополненной реальности для вывода информации в поле зрения специалиста",
          "Интерактивная визуализация процесса",
          "Функции удаленного помощника во время приемки, комплектации и действий при отклонениях",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Системы мониторинга",
    left: 77.5,
    top: 73,
    open: false,
    showVideo: false,
    tabs: [
      {
        name: "Машинное зрение",
        list: [
          "Контроль опасных действий в зонах погрузочно-разгрузочных работ",
          "Контроль ношения спецодежды и средств индивидуальной защиты",
          "Контроль доступа к объектам инфраструктуры",
          "Автоматическое прекращение работ механизмов, представляющих опасность для человека",
          "Визуальный контроль целостности упаковки товаров, разливов и рассыпания",
        ],
      },
      {
        name: "Системы мониторинга",
        list: [
          "Контроль над ситуацией даже вне зоны доступа",
          "Трекинг перемещений сотрудника в онлайн-режиме",
          "Возможность установить ограничение на проход персонала в определенные зоны",
          "Оперативное принятие решений об остановке работ при перемещении персонала в опасные зоны",
          "Экономия времени и ресурсов на поиск пострадавшего и минимизация последствий происшествия",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Инфраструктура склада",
    left: 23,
    top: 2,
    open: false,
    showVideo: false,
    tabs: [
      {
        name: "Мобильная быстровозводимая инфраструктура",
        list: [
          "Модульные склады",
          "Мобильные контрольно-пропускные пункты",
          "Бытовые комплексы",
          "Мобильные системы хранения топлива",
        ],
      },
      {
        name: "Инновационные покрытия",
        list: [
          "Дорожное покрытие на основе высокотехнологичных битумопроизводных материалов",
        ],
      },
      {
        name: "Системы хранения с элементами автоматизации и роботизации",
        list: [
          "Модульные стеллажные системы с возможностью трансформации пространства",
          "Автоматизированные узкопроходные, многоярусные системы",
          "Консольные, самонесущие и фронтальные многоярусные стеллажи",
          "Роботизированные системы хранения, способные перемещаться к месту комплектации",
          "Датчики на стеллажных системах для контроля температурного режима и перегрузки",
          "Лифтовые системы хранения",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "3D - Сканер",
    left: 83,
    top: 20,
    open: false,
    showVideo: false,
    tabs: [
      {
        name: "3D-сканер",
        list: [
          "Оперативное считывание параметров сотрудника и создание точной 3D-модели",
          "Создание единой базы актуальных размеров, которая упрощает процесс планирования закупок",
          "Сокращение времени на выдачу спецодежды и средств индивидуальной защиты",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Беспилотная, роботизированная складская техника.",
    left: 39,
    top: 52,
    open: false,
    showVideo: false,
    tabs: [
      {
        name: "Роботизированная складская техника",
        list: [
          "Беспилотный кран с радиоуправлением",
          "Роботизированные сцепные устройства",
          "Беспилотные паллетоперевозчики",
        ],
      },
      {
        name: "Беспилотная техника (транспорт, дроны)",
        list: [
          "Быстрая и безопасная инвентаризация дронами",
          "Беспилотный транспорт для перемещения грузов по территории склада",
        ],
      },
    ],
  },
];

export const terminalPresentMixin = {
  data() {
    return {
      isLoading: false,
      showPLus: true,
      tab_active: false,
      sliderOptions: {
        type: "slider",
        perView: 1,
        gap: 5,
        watchOverflow: true,
        startAt: 0,
        rewind: false,
        swipeThreshold: false,
      },
      slider: null,
      items,
      tabs: [],
      clonActive: false,
      defaultVideo: true,
      showCloneButton: true,
      isTabsOpen: true,
      terminal: {
        items: [],
        tabs: [],
      },
    };
  },
  methods: {
    cloneHandler() {
      this.addLoading();
      this.clonActive = true;
      this.defaultVideo = false;
      this.showPLus = false;
      this.showCloneButton = false;
    },
    closeCloneHandler() {
      this.addLoading();
      this.clonActive = false;
      this.defaultVideo = true;
      this.showPLus = true;
      this.showCloneButton = true;
    },
    activeTab(index) {
      this.terminal.tabs = this.tabs.map((el, ind) => {
        if (ind == index && !el.open) {
          el.open = true;
        } else {
          el.open = false;
        }
      });
    },
    activeItems(id) {
      if (!this.items && !this.items.length > 0) return;
      this.terminal.items = this.items.map((el) => {
        if (id == el.id) {
          el.open = true;
        } else {
          el.open = false;
        }
      });
    },
    showTabs(item) {
      this.addLoading();
      this.tabs = item.tabs.map((el) => {
        return {
          ...el,
          open: false,
        };
      });
      setTimeout(() => {
        this.defaultVideo = false;
        this.showPLus = false;
      }, 500);

      setTimeout(() => {
        item.showVideo = true;
      }, 1300);
      this.showCloneButton = false;
    },

    clearTabsRool() {
      this.items = this.items.map((el) => {
        return { ...el, open: false, showVideo: false };
      });
      this.tabs = [];
      this.isLoading = false;
      setTimeout(() => {
        this.defaultVideo = true;
      }, 800);
      setTimeout(() => {
        this.showPLus = true;
        this.showCloneButton = true;
      }, 1300);
    },
    addLoading() {
      this.showCloneButton = false;
      this.showPLus = false;
      this.isTabsOpen = false;
      setTimeout(() => {
        this.isLoading = true;
      }, 500);

      setTimeout(() => {
        this.isLoading = false;
        this.isTabsOpen = true;
      }, 1000);
    },
    initSlider() {
      this.slider = new Glide(".main_red-glide-js", this.sliderOptions);
      setTimeout(() => {
        if (!document.querySelector(".main_red-glide-js")) return;
        this.slider.mount();
      }, 500);
    },
  },
  computed: {
    windowSize() {
      return this.sizes.window;
    },
    videoScreenSize() {
      if (this.windowSize > 768) {
        return "planshet_album";
      } else if (this.windowSize > 667) {
        return "planshet_book";
      } else if (this.windowSize > 450) {
        return "mobile_album";
      } else if (this.windowSize > 0) {
        return "mobile_book";
      }
      return "planshet_album";
    },
  },
  watch: {
    windowSize(val) {
      if (val < 1024) {
        this.initSlider();
      }
    },
  },
  mounted() {
    if (this.windowSize < 1024) {
      this.initSlider();
    }
  },
};
