import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/react';

const Feed: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonLabel>OLYMPUS ACADEMY</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>HUNGER GAMES</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>HUNGER GAMES: CATCHING FIRE</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>HUNGER GAMES: MOCKING JAY</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>THE BALLAD OF SONGBIRDS AND SNAKES</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;