type Task = {
  id: string;
  text: string;
  isComplited?: boolean;
  complitedDate?: Date;
};

type UserSchemaType = {
  userName: string;
  email: string;
  bio: string;
  image: string;
  id: string;
  hash: string;
  salt: string;
};

/* Exclude */
type NameOfPublicFields = Exclude<keyof UserSchemaType, "hash" | "salt">;

/* Extract */
type Middle = Extract<"name" | "age", "age">; // возьмет только то, что есть в обоих аргументах

type I = Extract<keyof Task, keyof UserSchemaType>; // будет только id, т.к. только он есть в обоих типах

/* Parameters */
function getInt(n: string) {
  return parseInt(n);
}

type Parameters1 = Parameters<typeof getInt>; // вычисляет тип параметров ф-ции

/* ReturnType */
type ReturnType1 = ReturnType<typeof getInt>; // вычисляет тип возвращаемый ф-цией

/* Awaited */
declare function fetch(): Promise<string>;

type FetchResult = Awaited<ReturnType<typeof fetch>>; //вычиялет тип возращаемый ф-цией, разворачивает промис и достает его тип. Может разворачивать промис в промисе и т.д.

/*Манипуляции со строками Capitalize, Uncapitalize, Uppercase, Lowercase */
const user = {
  name: "Anna",
  age: 32,
};

type User = typeof user;

type WithGetters<T extends string> = Record<
  `get${Capitalize<T>}`,
  () => string
>; // нужно указывать extends string, чтоб TS понимал, что может применить стринговые методы

declare function createGetters(u: User): WithGetters<keyof User>;

const withGetters = createGetters(user);

withGetters.getAge();

/*-------*/

const ItilitiesTupes = () => {
  return <div>Utilitires Tupes</div>;
};

export default ItilitiesTupes;
