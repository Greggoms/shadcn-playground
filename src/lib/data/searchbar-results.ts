import { addDays, subDays } from "date-fns";

export type SearchbarResults = {
  id: string;
  name: string;
  location: string;
  timestamp: Date | string;
}[];

export const searchbarOptions: SearchbarResults = [
  {
    id: "111",
    name: "Le Impasta",
    location: "Area 1",
    timestamp: subDays(new Date(), 10),
  },
  {
    id: "222",
    name: "AAA Test",
    location: "Area 2",
    timestamp: subDays(new Date(), 8),
  },
  {
    id: "333",
    name: "Scrub Sauce",
    location: "Area 3",
    timestamp: subDays(new Date(), 6),
  },
  {
    id: "444",
    name: "Tweedle Dee",
    location: "Area 1",
    timestamp: subDays(new Date(), 4),
  },
  {
    id: "555",
    name: "Grinch Grunch",
    location: "Area 2",
    timestamp: subDays(new Date(), 2),
  },
  {
    id: "666",
    name: "Scrambled Egg",
    location: "Area 3",
    timestamp: new Date(),
  },
  {
    id: "777",
    name: "Bacon Bit",
    location: "Area 1",
    timestamp: addDays(new Date(), 2),
  },
  {
    id: "888",
    name: "Lorem Ipsum",
    location: "Area 1",
    timestamp: addDays(new Date(), 4),
  },
  {
    id: "999",
    name: "Doctor Oc",
    location: "Area 1",
    timestamp: addDays(new Date(), 6),
  },
];
