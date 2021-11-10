/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import fetchUserQuizzes from "./fetchUserQuizzes";

const LIKED = "liked";
const LOVED = "loved";

const getMatchingInterests = async (uid1: string, uid2: string):
Promise<{ liked: string[], loved: string[] }> => {
  const quiz1 = await fetchUserQuizzes({ id: uid1 });
  const quiz2 = await fetchUserQuizzes({ id: uid2 });
  // note items![0] assumes users have one quiz only
  const user1Responses = new Map(quiz1!.data!.getUser!.quizzes!.items![0]!.responses
    .map((i) => [i.q, i.a]));
  const user2Responses = new Map(quiz2!.data!.getUser!.quizzes!.items![0]!.responses
    .map((i) => [i.q, i.a]));
  const liked: string[] = [];
  const loved: string[] = [];

  user1Responses.forEach((a: string, q: string) => {
    if ((a === LIKED || a === LOVED) && (user2Responses.get(q) === LIKED || user2Responses.get(q) === LOVED)) {
      if (a === LOVED && user2Responses.get(q) === LOVED) {
        loved.push(q);
      } else {
        liked.push(q);
      }
    }
  });
  return { liked, loved };
};

export default getMatchingInterests;
