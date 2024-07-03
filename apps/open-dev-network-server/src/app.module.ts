import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { NonTechnicalModule } from "./nonTechnical/nonTechnical.module";
import { TechnicalModule } from "./technical/technical.module";
import { L2sModule } from "./l2s/l2s.module";
import { ProjectModule } from "./project/project.module";
import { DeveloperModule } from "./developer/developer.module";
import { TechnologyModule } from "./technology/technology.module";
import { RepositoryModule } from "./repository/repository.module";
import { UserModule } from "./user/user.module";
import { TechStackModule } from "./techStack/techStack.module";
import { CategoryModule } from "./category/category.module";
import { IssueModule } from "./issue/issue.module";
import { UserPreferenceModule } from "./userPreference/userPreference.module";
import { UserActivityModule } from "./userActivity/userActivity.module";
import { UserStatisticModule } from "./userStatistic/userStatistic.module";
import { StatisticsDashboardModule } from "./StatisticsDashboard/statisticsdashboard.module";
import { UserDashboardModule } from "./UserDashboard/userdashboard.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./rabbitmq/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    ACLModule,
    AuthModule,
    KafkaModule,
    NonTechnicalModule,
    TechnicalModule,
    L2sModule,
    ProjectModule,
    DeveloperModule,
    TechnologyModule,
    RepositoryModule,
    UserModule,
    TechStackModule,
    CategoryModule,
    IssueModule,
    UserPreferenceModule,
    UserActivityModule,
    UserStatisticModule,
    StatisticsDashboardModule,
    UserDashboardModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
