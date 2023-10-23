pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_login')
    } 
    stages{
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t abdulbabawale/todobackend:1.0.3 .'
                }
            }
        }
              stage('Login and push to docker hub'){
            steps{
                   sh 'echo $DOCKERHUB_CREDENTIALS | docker login -u abdulbabawale --password-stdin'
                   sh 'docker push abdulbabawale/todobackend:1.0.3'
            }
        }
           stage('execute ansible playbook') {
            steps{
                ansiblePlaybook installation: 'ansible2', playbook: 'ansible_playbook.yml'
            }
        } 
    }
}
        
