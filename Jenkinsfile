pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_login')
    } 
    stages{
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t abdulbabawale/todobackend:1.0.1 .'
                }
            }
        }
              stage('Login and push to docker hub'){
            steps{
                   sh 'echo $DOCKERHUB_CREDENTIALS | docker login -u abdulbabawale --password-stdin'
                   sh 'docker push abdulbabawale/todobackend:1.0.1'
            }
        }
    }
}
        
