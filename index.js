const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: `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` })

const test = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated()

  console.log("Hello, %s", login)

  const result = await octokit.rest.repos.addStatusCheckContexts({
    owner: 'mikeyrt16',
    repo: 'monorepo-queue'
    branch
  })

 console.log('RESULT', result)
}

test()
