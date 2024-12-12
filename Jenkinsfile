pipeline {
    agent any
    environment {
        USERNAME = "cmd"
    }
    stages{
        stage("build"){
            agent {
                docker {
                    label 'contenedores'
                    image 'node:23-alpine'
                    reuseNode true
                }
            }
            stages{
                stage("build - instalacion dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("build - ejecucion de test"){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage("build - build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}