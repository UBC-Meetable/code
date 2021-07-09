import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { joinFriendGroupInput, JoinFriendGroupQuery } from "../API";
import { joinFriendGroup } from "../graphql/queries";

const inputInstance = {
    id: '1',
    university: 'ubc',
    year: 1,
} as joinFriendGroupInput;
const getBestFriendGroup = (input: joinFriendGroupInput):
Promise<GraphQLResult<JoinFriendGroupQuery>> => API.graphql({
  query: joinFriendGroup,
  variables: {
    user: input,
  },
}) as Promise<GraphQLResult<JoinFriendGroupQuery>>;

async function testAll() {
    let out = await getBestFriendGroup(inputInstance);
    console.log(out);
}

if (require.main === module) {
    testAll();
}

export default testAll;
