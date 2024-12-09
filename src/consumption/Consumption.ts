import { GraphQLError } from "graphql";
import prisma from "../prisma/client.js";
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { consumptionSchema } from "./schema.js";

export class Consumption {
    async all(startDate?: string, endDate?: string) {
        try {
            const { error } = consumptionSchema.validate({ startDate, endDate })

            if (error) throw new GraphQLError(error.details[0].message, {
                extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT }
            })

            const where: { timestamp?: { gte?: string, lte: string } } = {};

            if (startDate && endDate) {
                const start = new Date(startDate)
                const end = new Date(endDate)

                where.timestamp = {
                    gte: (new Date(start.setUTCHours(0, 0, 0))).toISOString(),
                    lte: (new Date(end.setUTCHours(23, 59, 59))).toISOString(),
                }
            }

            const consumptions = await prisma.consumption.findMany({ where })

            return JSON.parse(JSON.stringify(consumptions))
        } catch (error) {
            throw new GraphQLError('Server error, try later.', {
                extensions: { code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR }
            })
        }
    }
}
