import getData from './storage';

const getAge = () => {
  const { yearOfBirth } = getData();
  const age = Math.floor(
    (Date.now() - new Date(yearOfBirth).getTime()) / 3.154e10
  );
  return `( ${age.toString()} years old )`;
};

export default getAge;
