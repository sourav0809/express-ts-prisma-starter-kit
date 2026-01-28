import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

import envConfig from './envConfig';

import { Prisma, PrismaClient } from '../../prisma/generated/client';

const connectionString = envConfig.databaseUrl;

// NOTE: Currently we recommend using PostgreSQL with a direct connection string
// instead of a connection pool for Vercel deployment and preview branches.
// https://pris.ly/d/vercel-postgres
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);

const prisma: PrismaClient = new PrismaClient({ adapter });

export { prisma, Prisma as PrismaTypes };
