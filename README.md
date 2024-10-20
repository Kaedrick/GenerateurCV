
# Projet Générateur de CV

Ce projet est une application de gestion de CV basée sur une architecture full-stack JavaScript utilisant **React** pour le frontend et **Node.js avec Express et MongoDB** pour le backend.

## Documentation des Routes API

### Authentification

- **POST /auth/register**  
  Crée un nouvel utilisateur.  
  **Corps de la requête** :
  ```json
  {
    "username": "user123",
    "password": "password123"
  }
  ```

- **POST /auth/login**  
  Connecte un utilisateur et retourne un token JWT.  
  **Corps de la requête** :
  ```json
  {
    "username": "user123",
    "password": "password123"
  }
  ```

  **Réponse** :
  ```json
  {
    "token": "votre_token_jwt_ici"
  }
  ```

### Gestion des CV

- **POST /cv**  
  Crée un nouveau CV.  
  **Headers** : `Authorization: Bearer <token>`  
  **Corps de la requête** :
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "description": "Développeur full-stack",
    "education": ["Licence Informatique", "Certification Full Stack"],
    "experience": ["Développeur chez XYZ", "Stage chez ABC"],
    "visible": true
  }
  ```

- **GET /cv**  
  Récupère tous les CV visibles.  
  **Headers** : `Authorization: Bearer <token>`

- **PUT /cv/:id**  
  Met à jour un CV existant.  
  **Headers** : `Authorization: Bearer <token>`  
  **Corps de la requête** (exemple de mise à jour) :
  ```json
  {
    "description": "Développeur expérimenté"
  }
  ```

- **DELETE /cv/:id**  
  Supprime un CV existant.  
  **Headers** : `Authorization: Bearer <token>`

### Recommandations

- **POST /recommendations**  
  Ajoute une recommandation à un CV.  
  **Headers** : `Authorization: Bearer <token>`  
  **Corps de la requête** :
  ```json
  {
    "cvId": "id_du_cv",
    "message": "Excellent développeur, recommandé !"
  }
  ```

- **GET /recommendations/:cvId**  
  Récupère toutes les recommandations pour un CV donné.  
  **Headers** : `Authorization: Bearer <token>`

