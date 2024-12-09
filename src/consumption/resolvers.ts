import { Resolvers } from "../generated/graphql";

export const resolvers: Resolvers = {
    Query: {
        consumptions: (_, args, context) => {
            const { startDate, endDate } = args
            return context.dataSources.all(startDate || '', endDate || '')
        },
    },
};
