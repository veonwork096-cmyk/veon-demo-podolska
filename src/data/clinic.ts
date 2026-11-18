// Facts only from veon/client.json, veon/client-digest.md and audit/notes/business.md (podolska.uz.ua, /about, /prices).
import type { ImageMetadata } from "astro";
import podolska from "../assets/img/team-podolska.webp";
import yadzhyn from "../assets/img/team-yadzhyn.webp";
import turianytsia from "../assets/img/team-turianytsia.webp";
import khashchivska from "../assets/img/team-khashchivska.webp";
import taran from "../assets/img/team-taran.webp";
import biliak from "../assets/img/team-biliak.webp";
import plega from "../assets/img/team-plega.webp";
import bogdan from "../assets/img/team-bogdan.webp";
import shelepets from "../assets/img/team-shelepets.webp";
import ivachevska from "../assets/img/team-ivachevska.webp";
import bank from "../assets/img/team-bank.webp";
import zhirosh from "../assets/img/team-zhirosh.webp";

export const FUTURE = "Розділ у розробці";

export const contacts = {
  reception: { display: "+38 099 285 93 25", short: "099 285 93 25", href: "tel:+380992859325" },
  messengers: { display: "+38 068 972 34 54", short: "068 972 34 54", tel: "tel:+380689723454", viber: "viber://chat?number=%2B380689723454" },
  address: { city: "м. Ужгород", street: "вул. Грушевського, 2 Ж", short: "Грушевського, 2 Ж" },
  map: "https://maps.app.goo.gl/ZEPDS2dJ8AGZitSv8",
  hours: [
    { days: "Пн–Пт", full: "Понеділок – п'ятниця", time: "8:00–17:00" },
    { days: "Сб", full: "Субота", time: "9:00–15:00" },
    { days: "Нд", full: "Неділя", time: "вихідний" },
  ],
  payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
};

export interface Person { name: string; role: string; photo: ImageMetadata; }

export const people = {
  podolska: { name: "Вікторія Подольська", role: "Лікар-терапевт, УЗД-спеціаліст", photo: podolska },
  biliak: { name: "Ангеліна Біляк", role: "Лікар-терапевт", photo: biliak },
  yadzhyn: { name: "Марія Яджин", role: "Лікар-гінеколог, онкогінеколог", photo: yadzhyn },
  plega: { name: "Марина Плега", role: "Лікар акушер-гінеколог", photo: plega },
  bogdan: { name: "Олеся Богдан", role: "Лікар дитячий гінеколог", photo: bogdan },
  taran: { name: "Інна Таран", role: "Лікар-педіатр", photo: taran },
  shelepets: { name: "Марина Шелепець", role: "Лікар-невропатолог", photo: shelepets },
  ivachevska: { name: "Віталіна Івачевська", role: "Лікар-кардіолог, спеціаліст з ехо", photo: ivachevska },
  bank: { name: "Світлана Банк", role: "Масажист", photo: bank },
  zhirosh: { name: "Михайло Жірош", role: "Масажист-реабілітолог", photo: zhirosh },
  turianytsia: { name: "Оксана Туряниця", role: "Медична сестра, адміністратор", photo: turianytsia },
  khashchivska: { name: "Марта Хащівська", role: "Медична сестра, адміністратор", photo: khashchivska },
} satisfies Record<string, Person>;

export interface Direction {
  id: string;
  title: string;
  text: string;
  price?: string;
  priceNote?: string;
  people: Person[];
  size: "wide" | "mid" | "third" | "half";
  plain?: boolean;
}

export const directions: Direction[] = [
  { id: "terapiia", title: "Терапія", text: "Консультативний прийом терапевта і супровід на всіх етапах лікування.", price: "від 600 грн", priceNote: "прийом лікаря-терапевта", people: [people.podolska, people.biliak], size: "wide" },
  { id: "hinekolohiia", title: "Гінекологія", text: "Огляд, кольпоскопія, біопсія. Приймає і дитячий гінеколог.", price: "від 600 грн", priceNote: "прийом акушер-гінеколога", people: [people.yadzhyn, people.plega, people.bogdan], size: "mid" },
  { id: "pediatriia", title: "Педіатрія", text: "Прийом дітей лікарем-педіатром.", priceNote: "вартість уточнюйте за телефоном", people: [people.taran], size: "third" },
  { id: "uzd", title: "УЗД", text: "Для дорослих і дітей: комплексне УЗД та окремі органи.", price: "від 300 грн", priceNote: "окремі органи 300–600 грн", people: [people.podolska], size: "third" },
  { id: "ekh", title: "ЕКГ та ехо", text: "ЕКГ, ЕКГ з інтерпретацією лікаря, ехокардіоскопія.", price: "від 200 грн", priceNote: "ЕКГ 200 грн, з інтерпретацією 300 грн", people: [people.ivachevska], size: "third" },
  { id: "chekapy", title: "Чекапи і скринінг 40+", text: "Профілактичні візити для регулярного контролю здоров'я. Склад програм уточнюйте за телефоном.", price: "від 500 грн", people: [], size: "half", plain: true },
  { id: "analizy", title: "Аналізи", text: "Забір крові в клініці, дослідження виконує лабораторія-партнер.", priceNote: "вартість аналізів уточнюйте за телефоном", people: [], size: "half", plain: true },
];

export const prices = [
  { name: "Консультативний прийом лікаря-терапевта", price: "600" },
  { name: "Консультативний прийом лікаря акушер-гінеколога", price: "600" },
  { name: "Гінекологічний огляд з кольпоскопією", price: "750" },
  { name: "Комплексне УЗД для жінок / для чоловіків", price: "1500 / 1200" },
  { name: "УЗД окремих органів", price: "300–600" },
  { name: "ЕКГ / ЕКГ з інтерпретацією лікаря", price: "200 / 300" },
  { name: "Ехокардіоскопія", price: "550" },
  { name: "Інтерпретація лабораторних показників", price: "350" },
];

export const teamGroups: { title: string; members: Person[] }[] = [
  { title: "Терапія", members: [people.biliak] },
  { title: "Гінекологія", members: [people.yadzhyn, people.plega, people.bogdan] },
  { title: "Педіатрія", members: [people.taran] },
  { title: "Неврологія", members: [people.shelepets] },
  { title: "Кардіологія та ехо", members: [people.ivachevska] },
  { title: "Масаж і реабілітація", members: [people.bank, people.zhirosh] },
  { title: "Рецепція", members: [people.turianytsia, people.khashchivska] },
];

export const nav = [
  { href: "#poslugy", label: "Послуги" },
  { href: "#tsiny", label: "Ціни" },
  { href: "#likari", label: "Лікарі" },
  { href: "#deklaratsiia", label: "Декларація" },
  { href: "#kontakty", label: "Контакти" },
];
