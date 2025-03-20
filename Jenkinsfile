pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "vizuo:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ayusao/VIZUO.git' 
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push $DOCKER_IMAGE'  // Optionally, push to a registry
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl rollout restart deployment vizuo-app'  // Restart the deployment if needed
                }
            }
        }
    }

    post {
        success {
            echo "CI/CD Pipeline completed successfully!"
        }
        failure {
            echo "CI/CD Pipeline failed!"
        }
    }
}
