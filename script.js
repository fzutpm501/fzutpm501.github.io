const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const alumniRecords = [
  { year: 2025, name: '丘勋涛', destination: '福州大学攻读博士学位', type: 'academic' },
  { year: 2025, name: '张诗棋', destination: '专利审查协作河南中心', type: 'industry' },
  { year: 2025, name: '梁健鸿', destination: '北京航空航天大学攻读博士学位', type: 'academic' },
  { year: 2025, name: '魏霖', destination: '福建省漳州高速公路有限公司', type: 'industry' },
  { year: 2025, name: '郑祥龙', destination: '福建省福泉高速公路有限公司', type: 'industry' },
  { year: 2025, name: '朱新运', destination: '中国铁路南昌局集团有限公司福州车务段', type: 'industry' },
  { year: 2024, name: '饶寅升', destination: '中国电建集团华东勘测设计院（福建）有限公司', type: 'industry' },
  { year: 2024, name: '陈艳生', destination: '中南大学攻读博士学位', type: 'academic', photo: 'assets/陈艳生.jpg' },
  { year: 2024, name: '梁航宇', destination: '福建高速信息科技有限公司', type: 'industry' },
  { year: 2024, name: '周晓伟', destination: '莆田学院', type: 'academic' },
  { year: 2024, name: '郭凌', destination: '广州市交通规划研究院有限公司', type: 'industry' },
  { year: 2024, name: '苏明乾', destination: '福州大学攻读博士学位', type: 'academic' },
  { year: 2024, name: '宫新梅', destination: '福州新区开发投资集团有限公司', type: 'industry' },
  { year: 2023, name: '王鈜民', destination: '宁波市交通规划设计研究院有限公司', type: 'industry' },
  { year: 2023, name: '汪洋', destination: '常州国际机场有限公司', type: 'industry' },
  { year: 2023, name: '张博深', destination: '福建省高速公路联网运营有限公司', type: 'industry' },
  { year: 2023, name: '范炎辉', destination: '泉厦高速公路管理有限公司', type: 'industry' },
  { year: 2023, name: '黄泓毅', destination: '福建省高速公路联网运营有限公司', type: 'industry' },
  { year: 2023, name: '张宇龙', destination: '比亚迪股份有限公司', type: 'industry' },
  { year: 2022, name: '曾少聪', destination: '福州市规划设计研究院集团有限公司', type: 'industry' },
  { year: 2022, name: '赵银柱', destination: '福州市道路运输事业发展中心', type: 'public' },
  { year: 2022, name: '林晨', destination: '福建船政交通职业学院', type: 'academic' },
  { year: 2021, name: '陈嘉范', destination: '湖南省高速公路集团有限公司', type: 'industry' },
  { year: 2021, name: '林先旺', destination: '福耀玻璃（福建）有限公司', type: 'industry' },
  { year: 2021, name: '马振鸿', destination: '莆田市公路事业发展中心', type: 'public' },
  { year: 2021, name: '魏义安', destination: '福建省交通规划设计院有限公司', type: 'industry' },
  { year: 2020, name: '林力', destination: '福建省交通规划设计院有限公司', type: 'industry' },
  { year: 2020, name: '徐新颖', destination: '莆田市城厢区住房和城乡建设局', type: 'public' },
  { year: 2020, name: '朱家哲', destination: '莆田市荔城区委组织部', type: 'public' },
  { year: 2020, name: '张杰', destination: '宁德师范学院', type: 'academic' },
  { year: 2019, name: '郭建容', destination: '自主创业', type: 'entrepreneurship' },
  { year: 2019, name: '黄丽玲', destination: '福州市城乡规划设计院有限公司', type: 'industry' },
  { year: 2018, name: '许舒恬', destination: '莆田市城厢区住房和城乡建设局', type: 'public' },
  { year: 2017, name: '苏荣霖', destination: '福建省公路事业发展中心', type: 'public' },
  { year: 2017, name: '薛建州', destination: '太原市城乡规划设计研究院', type: 'industry' },
  { year: 2017, name: '刘永祥', destination: '泉州市公安局交通警察支队', type: 'public' },
  { year: 2016, name: '孙大族', destination: '温州市交通规划设计研究院', type: 'industry' },
  { year: 2016, name: '冯婷婷', destination: '闽南理工学院', type: 'academic' }
];

const alumniIcons = {
  academic: 'graduation-cap',
  industry: 'building-2',
  public: 'landmark',
  entrepreneurship: 'briefcase'
};

const alumniGrid = document.querySelector('.alumni-grid');
alumniGrid.innerHTML = alumniRecords.map((record) => {
  const avatar = record.photo
    ? `<div class="avatar alumni-photo">${record.name}<img src="${record.photo}" alt="${record.name}" onerror="this.style.display='none'"></div>`
    : `<div class="avatar">${record.name}</div>`;
  return `<article class="alumni-card" data-type="${record.type}">${avatar}<div><span>${record.year}届 · 硕士</span><h3>${record.name}</h3><p>${record.destination}</p></div><i data-lucide="${alumniIcons[record.type]}"></i></article>`;
}).join('');

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.alumni-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

if (window.lucide) window.lucide.createIcons();
