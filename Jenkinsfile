pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_login')
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
                   sh 'echo $DOCKERHUB_CREDENTIALS | docker login -u abdulbabawale --password-stdin'
            }
        }
        stage('Push docker image to hub') {
            steps{
                sh 'docker push todobackend:1.0.1'
            }
        }
    }
}
        
