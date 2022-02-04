const { Octokit, App } = require('octokit')
const { createAppAuth } = require('@octokit/auth-app')

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    installationId: 22933065,
    appId: 169675,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1feel0p+fsseFwMDjf+/KUYqMAwkpJ+7rM8+A3vvUS8Ml3U4
tOSicJuG5gHaB+VZmLAGRQgZublUd7P3f5tRWC5AgImymjz1tv+1lkcSE0MnUIe0
NHNTBlSNOzDMj8zCx0IuBDKyNbr666acbEBb72Dv+/OuGGJPIsSIDwCeTHjepuoi
31TM5d2g9h4Et9ehauWfIhEMoyRfc5YmDvyvirAByGRojmNf/yCoPMXmP1KpqXjR
qjzRTFkP2t5wsVgWpLzWqdfUO6+a6kq2kdWUA7+d+Uj3QxeNA5OLiJZfwKWbCZH9
O4dqtfRDvUcUHcJ06ykhEDSn0jFZlS8U1KyUPwIDAQABAoIBABNGi3L1sw+ZHMzV
6KwSLhZ5y7MoZOSvvyiCQwPtVlHp+yhp1wH01u1uFWkDIbE0aC3pLadqY2bn20Qt
Yk6Mn3diM01hGkXq1/f0cVdob6hslE4c648OFJytYUvDyanquGFbBOo75vIQNiqk
h9L4uU+HXBdGjJiFwrtPGTLAy4H391LSiLjHqwYBOD92sKuPtajkv9CA44aIkiFj
ip8lWIX0TRv91ftNu0k6WoSgmk+wkLvTWTDl349rAy0Aa39suv+kCRnVdSJYU23i
0HwZuKofVXApD3T0ieben+gjRvAYvlA0+YVqFvs3KCbd76F+kX6X819hPFZhqJfd
ZCFOMAECgYEA+oAygnsjlmww3mAIJGDPRKPIhNB9qGUosKuiVBQLVy7kYjl2SUoI
WKTrX4RrFVGPIgVcW/ZCzOoul3I8ya67G00lxQlSc/w08zovv3ZVw0oHmKbOHP82
TDVuucGF78Mtuw6LD+tWVFA1cnkqLxfWOWpLrvj3oPYRDxaqR7vpUr8CgYEA2qob
B0WmS2OjH4V7KRZ+8ZCMa/SUmrpWMMcDQY9pCMd3i20nnoYaOQB3uSeRq3PiCYgu
+VWqNsyMLdQCaUWNRFhTZPixIMbfsdM3evheTtMKmR3Rlw5JXiR+tx8I2JpF/h5E
QB1j44W9SK3+x+jc1we9cnd44F9VwWjAo4b4noECgYBv0Cs7jMV8zjwd9pWLz16V
D9pgVkPQl57LBUGG8A+D0d2Fboq6+f2xu6OIVi4KLQaLtALe1ZRJrTowxYAWshS4
gf4a7idMuEXWT6Gif6qWagPsAoC79rsA11TeO2CSffd6qGowJ+a36bmBqE3JCYXI
yQaRSnYV9d/1cTN+o4TpNwKBgQCrDk8+jRnd9//v9Le4GMUNrAptmVN3BzXNyqGd
c9ay63d1Ntq7hCSXWupNicrG2UyGMGau3njdjX5Li4KnX6V3RbFXV8UY4vqzXYwV
Qp5kA2xTA6SmCqMSZnJKRpjg+S6v8HVrwpIVttWwOY0KTfwUqxVkqlmBDJNFTfEE
+90aAQKBgQCdTuFyuEnl42umn+5DL5RUn2L+QpbeeLVTPPtFmF9WemCpcUdCmb9R
Gh6GcgTs4ADM3wmDM4iTLd0VAOmzp0SsCLzPXOlfB44zZIuVauF/1S/0IAZ/zcYJ
9d26P0cKlZN7tsX9/TdyRaTwLCGKNNoG44RAdAO0UGHiEiK4AKVBRg==
-----END RSA PRIVATE KEY-----`,
  },
})

const test = async () => {
  const blah = await octokit.request('POST /repos/mikeyrt16/monorepo-queue/check-runs', {
    owner: 'mikeyrt16',
    repo: 'monorepo-queue',
    name: 'BOOOOOBS',
    head_sha: '5b4dff213c0cf07d7ecd814cea94428d4bcba873',
    status: 'in_progress',
  })

  console.log('!!!!!!', blah)
}

test()
