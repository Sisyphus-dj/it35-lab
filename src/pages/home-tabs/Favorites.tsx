import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';

const cardStyle: React.CSSProperties = {
  backgroundColor: '#1e1e1e',
  color: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid #333',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
};

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>⭐ Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#121212' }}>
        <IonText>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Favorite Technologies</h2>
          <p style={{ color: '#ccc' }}>
            Here’s a snapshot of the key technologies used in this app.
          </p>
        </IonText>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonCard style={cardStyle}>
                <img
                  src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                  alt="Frontend"
                  style={imageStyle}
                />
                <IonCardHeader>
                  <IonCardTitle>Frontend</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>React</li>
                    <li>Ionic Framework</li>
                    <li>TypeScript</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <IonCard style={cardStyle}>
                <img
                  src="data:image/png;base64,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"
                  alt="Backend"
                  style={imageStyle}
                />
                <IonCardHeader>
                  <IonCardTitle>Backend</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>Supabase</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="4">
              <IonCard style={cardStyle}>
                <img
                  src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
                  alt="Deployment"
                  style={imageStyle}
                />
                <IonCardHeader>
                  <IonCardTitle>Deployment</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Docker</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
