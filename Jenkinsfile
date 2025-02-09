pipeline {
    agent {
        label 'phanes'
    }

    stages {
        stage('Link & Build') {
            steps {
                sh 'make npm-build'
            }
        }
        stage('Image Build and Push') {
            when {
                expression {
                    return env.CHANGE_ID == null
                }
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'harbor',
                                                      usernameVariable: 'HARBOR_USER',
                                                      passwordVariable: 'HARBOR_PASSWORD')]) {
                        sh 'docker login harbor.phanescloud.com -u "$HARBOR_USER" -p "$HARBOR_PASSWORD"'
                    }
                    sh 'make docker-push'
                }
            }
        }
    }
}