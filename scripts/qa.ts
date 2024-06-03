// #!/usr/bin/env node
// /* eslint-disable @typescript-eslint/no-empty-function */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable import/no-extraneous-dependencies */

// import { ParseArgsConfig, parseArgs } from 'node:util';
// import { fromIni } from '@aws-sdk/credential-providers';
// import {
//     CreateServiceCommand,
//     // DeleteServiceCommand,
//     // DeleteTaskDefinitionsCommand,
//     // DeregisterTaskDefinitionCommand,
//     ECSClient,
//     RegisterTaskDefinitionCommand,
// } from '@aws-sdk/client-ecs';

// type ArgValues = {
//     [x: string]: string | boolean | (string | boolean)[] | undefined;
// };

// async function create(client: ECSClient, values: ArgValues): Promise<void> {
//     const registerCommand = new RegisterTaskDefinitionCommand({
//         family: 'qa-picasso-task-definition',
//         containerDefinitions: [
//             {
//                 name: values.version as string,
//                 image: `190925848936.dkr.ecr.eu-west-1.amazonaws.com/picasso:${values.version}`,
//                 portMappings: [
//                     {
//                         appProtocol: 'http2',
//                         containerPort: 3000,
//                         hostPort: 3000,
//                         name: 'qa-picasso-docker-port-mapping',
//                     },
//                 ],
//                 essential: true,
//                 environment: [
//                     {
//                         name: 'CT_ARTIFACTORY_TOKEN',
//                         value: process.env.CT_ARTIFACTORY_TOKEN as string,
//                     },
//                     {
//                         name: 'NEW_RELIC_APP_NAME',
//                         value: process.env.NEW_RELIC_APP_NAME as string,
//                     },
//                     {
//                         name: 'NEW_RELIC_LICENSE_KEY',
//                         value: process.env.NEW_RELIC_LICENSE_KEY as string,
//                     },
//                     {
//                         name: 'NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY',
//                         value: process.env.NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY as string,
//                     },
//                     {
//                         name: 'NEXT_PUBLIC_NEW_RELIC_ACCOUNT_ID',
//                         value: process.env.NEXT_PUBLIC_NEW_RELIC_ACCOUNT_ID as string,
//                     },
//                     {
//                         name: 'NEXT_PUBLIC_NEW_RELIC_TRUST_KEY',
//                         value: process.env.NEXT_PUBLIC_NEW_RELIC_TRUST_KEY as string,
//                     },
//                     {
//                         name: 'NEXT_PUBLIC_NEW_RELIC_AGENT_ID',
//                         value: process.env.NEXT_PUBLIC_NEW_RELIC_AGENT_ID as string,
//                     },
//                     {
//                         name: 'NEXT_PUBLIC_NEW_RELIC_APPLICATION_ID',
//                         value: process.env.NEXT_PUBLIC_NEW_RELIC_APPLICATION_ID as string,
//                     },
//                     {
//                         name: 'NODE_ENV',
//                         value: process.env.NODE_ENV as string,
//                     },
//                     {
//                         name: 'SENTRY_AUTH_TOKEN',
//                         value: process.env.SENTRY_AUTH_TOKEN as string,
//                     },
//                     {
//                         name: 'VP_ARTIFACTORY_TOKEN',
//                         value: process.env.VP_ARTIFACTORY_TOKEN as string,
//                     },
//                 ],
//                 logConfiguration: {
//                     logDriver: 'awslogs',
//                     options: {
//                         'awslogs-group': `${process.env.NEXT_PUBLIC_ASSISTANT_PAGE_SECTION}`,
//                         'awslogs-region': values.region as string,
//                         'awslogs-create-group': 'true',
//                         'awslogs-stream-prefix': 'qa-docker',
//                         mode: 'non-blocking',
//                     },
//                 },
//                 healthCheck: {
//                     command: ['CMD-SHELL', 'curl -f http://localhost:3000/livecheck || exit 1'],
//                 },
//             },
//         ],
//         cpu: '512',
//         memory: '4096',
//         tags: [
//             {
//                 key: 'team',
//                 value: 'Content Intelligence',
//             },
//         ],
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const taskResponse = await client.send(registerCommand);

//     // Create Service
//     const createServiceCommand = new CreateServiceCommand({
//         // CreateServiceRequest
//         cluster: 'STRING_VALUE',
//         serviceName: 'STRING_VALUE', // required
//         taskDefinition: 'STRING_VALUE',
//         loadBalancers: [
//             // LoadBalancers
//             {
//                 // LoadBalancer
//                 targetGroupArn: 'STRING_VALUE',
//                 loadBalancerName: 'STRING_VALUE',
//                 containerName: 'STRING_VALUE',
//                 containerPort: Number('int'),
//             },
//         ],
//         serviceRegistries: [
//             // ServiceRegistries
//             {
//                 // ServiceRegistry
//                 registryArn: 'STRING_VALUE',
//                 port: Number('int'),
//                 containerName: 'STRING_VALUE',
//                 containerPort: Number('int'),
//             },
//         ],
//         desiredCount: Number('int'),
//         clientToken: 'STRING_VALUE',
//         launchType: 'EC2' || 'FARGATE' || 'EXTERNAL',
//         capacityProviderStrategy: [
//             // CapacityProviderStrategy
//             {
//                 // CapacityProviderStrategyItem
//                 capacityProvider: 'STRING_VALUE', // required
//                 weight: Number('int'),
//                 base: Number('int'),
//             },
//         ],
//         platformVersion: 'STRING_VALUE',
//         role: 'STRING_VALUE',
//         deploymentConfiguration: {
//             // DeploymentConfiguration
//             deploymentCircuitBreaker: {
//                 // DeploymentCircuitBreaker
//                 enable: true || false, // required
//                 rollback: true || false, // required
//             },
//             maximumPercent: Number('int'),
//             minimumHealthyPercent: Number('int'),
//             alarms: {
//                 // DeploymentAlarms
//                 alarmNames: [
//                     // StringList // required
//                     'STRING_VALUE',
//                 ],
//                 enable: true || false, // required
//                 rollback: true || false, // required
//             },
//         },
//         placementConstraints: [
//             // PlacementConstraints
//             {
//                 // PlacementConstraint
//                 type: 'distinctInstance' || 'memberOf',
//                 expression: 'STRING_VALUE',
//             },
//         ],
//         placementStrategy: [
//             // PlacementStrategies
//             {
//                 // PlacementStrategy
//                 type: 'random' || 'spread' || 'binpack',
//                 field: 'STRING_VALUE',
//             },
//         ],
//         networkConfiguration: {
//             // NetworkConfiguration
//             awsvpcConfiguration: {
//                 // AwsVpcConfiguration
//                 subnets: [
//                     // required
//                     'STRING_VALUE',
//                 ],
//                 securityGroups: ['STRING_VALUE'],
//                 assignPublicIp: 'ENABLED' || 'DISABLED',
//             },
//         },
//         healthCheckGracePeriodSeconds: Number('int'),
//         schedulingStrategy: 'REPLICA' || 'DAEMON',
//         deploymentController: {
//             // DeploymentController
//             type: 'ECS' || 'CODE_DEPLOY' || 'EXTERNAL', // required
//         },
//         tags: [
//             // Tags
//             {
//                 // Tag
//                 key: 'STRING_VALUE',
//                 value: 'STRING_VALUE',
//             },
//         ],
//         enableECSManagedTags: true || false,
//         propagateTags: 'TASK_DEFINITION' || 'SERVICE' || 'NONE',
//         enableExecuteCommand: true || false,
//         serviceConnectConfiguration: {
//             // ServiceConnectConfiguration
//             enabled: true || false, // required
//             namespace: 'STRING_VALUE',
//             services: [
//                 // ServiceConnectServiceList
//                 {
//                     // ServiceConnectService
//                     portName: 'STRING_VALUE', // required
//                     discoveryName: 'STRING_VALUE',
//                     clientAliases: [
//                         // ServiceConnectClientAliasList
//                         {
//                             // ServiceConnectClientAlias
//                             port: Number('int'), // required
//                             dnsName: 'STRING_VALUE',
//                         },
//                     ],
//                     ingressPortOverride: Number('int'),
//                 },
//             ],
//             logConfiguration: {
//                 // LogConfiguration
//                 logDriver:
//                     'json-file' ||
//                     'syslog' ||
//                     'journald' ||
//                     'gelf' ||
//                     'fluentd' ||
//                     'awslogs' ||
//                     'splunk' ||
//                     'awsfirelens', // required
//                 options: {
//                     // LogConfigurationOptionsMap
//                     '<keys>': 'STRING_VALUE',
//                 },
//                 secretOptions: [
//                     // SecretList
//                     {
//                         // Secret
//                         name: 'STRING_VALUE', // required
//                         valueFrom: 'STRING_VALUE', // required
//                     },
//                 ],
//             },
//         },
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const serviceResponse = await client.send(createServiceCommand);
// }

// async function destroy(client: ECSClient, values: ArgValues): Promise<void> {}

// async function update(client: ECSClient, values: ArgValues): Promise<void> {}

// const options: ParseArgsConfig['options'] = {
//     profile: {
//         type: 'string',
//     },
//     region: {
//         type: 'string',
//         default: 'eu-west-1',
//     },
//     version: {
//         type: 'string',
//     },
// };
// const { values, positionals } = parseArgs({ options, allowPositionals: true });

// const client = new ECSClient({
//     credentials: values.profile ? fromIni({ profile: 'content-intelligence' }) : undefined,
// });

// switch (positionals[0]) {
//     case 'destroy':
//         await destroy(client, values);
//         break;
//     case 'update':
//         await update(client, values);
//         break;
//     case 'create':
//     default:
//         await create(client, values);
//         break;
// }
