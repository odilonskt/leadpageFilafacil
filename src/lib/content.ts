// TODO: trocar pelo link real do repositório quando ele for criado/publicado.
export const REPO_URL = '#'

export const FEATURES = [
  {
    title: 'Senha virtual na hora',
    description: 'Entre na fila de um estabelecimento cadastrado sem precisar ficar presente desde o início.',
  },
  {
    title: 'Posição em tempo real',
    description: 'Acompanhe o número da senha, sua posição, pessoas à frente e o tempo estimado de espera.',
  },
  {
    title: 'Cancelamento fácil',
    description: 'Desistiu do atendimento? Cancele sua senha e libere a vaga para os próximos da fila.',
  },
  {
    title: 'Múltiplas filas por estabelecimento',
    description: 'Cada serviço pode ter sua própria fila, com capacidade e situação configuráveis.',
  },
  {
    title: 'Bloqueio automático por ausência',
    description: 'Duas faltas consecutivas bloqueiam novas senhas por 2 meses, reduzindo o no-show.',
  },
  {
    title: 'Histórico de atendimentos',
    description: 'Consulte senhas, atendimentos e ausências anteriores a qualquer momento.',
  },
  {
    title: 'Endereço automático via CEP',
    description: 'Estabelecimentos preenchem endereço automaticamente com a API ViaCEP.',
  },
  {
    title: 'Identidade visual personalizável',
    description: 'Modelo white label: logotipo, cores e textos adaptados à marca do estabelecimento.',
  },
] as const

export const HOW_IT_WORKS_CLIENT = [
  {
    step: '1',
    title: 'Escolha o estabelecimento',
    description: 'Consulte clínicas, cartórios, salões e outros locais cadastrados e veja os serviços disponíveis.',
  },
  {
    step: '2',
    title: 'Retire sua senha virtual',
    description: 'O sistema verifica se não há bloqueio ativo e te coloca na fila sem precisar estar no local.',
  },
  {
    step: '3',
    title: 'Acompanhe em tempo real',
    description: 'Veja sua posição, pessoas à frente e o tempo estimado direto no celular, de onde você estiver.',
  },
  {
    step: '4',
    title: 'Seja chamado na hora certa',
    description: 'Receba a notificação de proximidade e chegue ao estabelecimento apenas quando for sua vez.',
  },
] as const

export const HOW_IT_WORKS_ESTABLISHMENT = [
  {
    step: '1',
    title: 'Gerencie suas filas',
    description: 'Crie, pause, reabra ou encerre filas vinculadas aos serviços oferecidos.',
  },
  {
    step: '2',
    title: 'Chame o próximo cliente',
    description: 'Visualize quem está aguardando e chame o próximo com um único toque.',
  },
  {
    step: '3',
    title: 'Registre o atendimento',
    description: 'Marque início e conclusão do atendimento, ou registre ausência quando o cliente não aparecer.',
  },
  {
    step: '4',
    title: 'Regra de 2 faltas consecutivas',
    description: 'Ao atingir duas ausências seguidas, o sistema bloqueia automaticamente o cliente por 2 meses.',
  },
] as const

export const PERSONAS = [
  {
    name: 'Mariana Silva',
    role: 'Cliente · Analista de marketing, 28 anos',
    image: 'mariana',
    summary:
      'Rotina dinâmica e cheia de compromissos. Quer sair de casa só quando o atendimento estiver próximo, sem perder tempo em salas de espera lotadas.',
  },
  {
    name: 'Carlos Eduardo Rocha',
    role: 'Estabelecimento · Proprietário, 44 anos',
    image: 'carlos',
    summary:
      'Dono de um centro de estética e barbearia. Enfrenta recepção lotada e clientes que somem após pegar senha. Quer organizar o fluxo e reduzir faltas.',
  },
  {
    name: 'Juliana Mendes',
    role: 'Atendente · Recepcionista, 23 anos',
    image: 'juliana',
    summary:
      'Primeira pessoa que o cliente encontra. Precisa chamar senhas, registrar presença e ausência rapidamente, sem depender de papel ou planilha.',
  },
] as const

export const PERFORMANCE_INDICATORS = [
  { label: 'Tempo médio de espera', description: 'Entre a retirada da senha e o atendimento.' },
  { label: 'Pessoas na fila', description: 'Volume de usuários aguardando, dentro da capacidade definida.' },
  { label: 'Taxa de ausência', description: 'Proporção de clientes chamados que não comparecem.' },
  { label: 'Taxa de cancelamento', description: 'Desistências identificadas antes do atendimento.' },
  { label: 'Tempo médio de atendimento', description: 'Duração dos atendimentos concluídos.' },
] as const

export const TECH_STACK = [
  { label: 'React Native 0.86 + Expo SDK 57' },
  { label: 'TypeScript' },
  { label: 'React Navigation' },
  { label: 'TanStack Query' },
  { label: 'NativeWind' },
  { label: 'React Hook Form + Zod' },
  { label: 'SQLite (expo-sqlite)' },
  { label: 'JSON Server' },
  { label: 'API ViaCEP' },
  { label: 'Monorepo Nx' },
] as const

export const TEAM = [
  'Bárbara Augusta Moreira de Matosinhos',
  'Eduardo Leandro de Jesus Guedes Ferreira',
  'Kauê Gonçalves Magalhães da Silva',
  'Lucas de Araujo Pedro',
  'Gabriel Cavalcante Simões de Medeiros',
  'Odilon de Campos',
] as const

export const ADVISOR = 'Wesley Dias Maciel'

export const GALLERY = [
  { src: 'home', alt: 'Tela inicial do cliente mostrando a senha ativa, posição na fila e tempo estimado' },
  { src: 'homeNotificacao', alt: 'Tela inicial com notificação avisando que o cliente é o próximo da fila' },
  { src: 'login', alt: 'Tela de login do aplicativo Fila Fácil' },
  { src: 'cadastro', alt: 'Tela de cadastro de novo usuário no aplicativo' },
  { src: 'painelAtendente', alt: 'Painel do atendente para chamar, rechamar e marcar ausência de clientes' },
] as const
