pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerlogin')
    } 
    stages{
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t todobackend:1.0.1 .'
                }
            }
        }
              stage('Login to docker hub'){
            steps{
                   sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS --password-stdin'
            }
        }
        stage('Push docker image to hub') {
            steps{
                sh 'docker push todobackend:1.0.1'
            }
        }
    }
}
        