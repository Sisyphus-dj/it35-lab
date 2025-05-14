import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
} from '@ionic/react';
import { cubeOutline, constructOutline, codeSlashOutline, peopleOutline, logoGithub, informationCircleOutline } from 'ionicons/icons';


const CustomDivider: React.FC = () => (
    <div style={{ height: '2px', backgroundColor: '#e0e0e0', margin: '20px 0', borderRadius: '5px' }}></div>
);
const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About Us</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen style={{ "--padding-start": "16px", "--padding-end": "16px" }}>

             
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={informationCircleOutline} style={{ marginRight: '8px' }} />
                        <IonText color="primary" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                            About Our Application Development Project
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>
                                This project is part of our <strong>Application Development</strong> course, 
                                where we are learning to build fully functional applications using modern web technologies. 
                                For this project, we are utilizing the <strong>Ionic React Framework</strong> to create 
                                an interactive, cross-platform mobile application as our main output from <strong>Prelim to Finals</strong>.
                            </p>
                        </IonText>
                    </IonCardContent>
                </IonCard>

                <CustomDivider />
              
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={cubeOutline} style={{ marginRight: '8px' }} />
                        <IonText color="secondary" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Technology Stack
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Ionic React Framework</strong> - For building responsive, mobile-friendly user interfaces.</li>
                            <li><strong>React Hooks and Components</strong> - To efficiently manage state and component logic.</li>
                            <li><strong>Git & GitHub</strong> - For version control and collaborative development.</li>
                            <li><strong>Visual Studio Code</strong> - Our primary code editor for writing, debugging, and testing.</li>
                        </ul>
                    </IonCardContent>
                </IonCard>

                <CustomDivider />
                
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={constructOutline} style={{ marginRight: '8px' }} />
                        <IonText color="tertiary" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Project Objectives
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li><strong>Learn Modern App Development:</strong> Understand the principles of building cross-platform apps using the Ionic React Framework.</li>
                                <li><strong>Implement Version Control:</strong> Practice proper versioning, collaboration, and rollback management using Git and GitHub.</li>
                                <li><strong>Create Real-World Applications:</strong> Develop real-world project outputs that evolve from basic concepts in the Prelim phase to fully functional applications by Finals.</li>
                            </ol>
                        </IonText>
                    </IonCardContent>
                </IonCard>

                <CustomDivider />
                
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={codeSlashOutline} style={{ marginRight: '8px' }} />
                        <IonText color="success" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Development Phases
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Prelim:</strong> Introduction to React and Ionic, setting up the development environment, and understanding the basics of component-based architecture.</li>
                                <li><strong>Midterm:</strong> Building the core features of the application, integrating navigation, state management, and data handling.</li>
                                <li><strong>Finals:</strong> Finalizing the application with full functionality, UI enhancements, and testing for deployment readiness.</li>
                            </ul>
                        </IonText>
                    </IonCardContent>
                </IonCard>

                <CustomDivider />
                
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={peopleOutline} style={{ marginRight: '8px' }} />
                        <IonText color="warning" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Collaboration & Version Control
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>
                                We use GitHub as our primary platform for managing code versions and team collaboration. 
                                This allows us to track changes, resolve conflicts, and work efficiently as a team. 
                                Each project phase is committed to a dedicated branch, ensuring smooth progression and organized development.
                            </p>
                        </IonText>
                    </IonCardContent>
                </IonCard>

                <CustomDivider />

               
                <IonCard className="shadow-lg rounded-xl">
                    <IonCardHeader>
                        <IonIcon icon={logoGithub} style={{ marginRight: '8px' }} />
                        <IonText color="danger" style={{ fontSize: '20px', fontWeight: '600' }}>
                            Contact Information
                        </IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>
                                For more information about our project, you can reach out through our project repository on{' '}
                                <a href="https://github.com/Sisyphus-dj" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>{' '}
                                or contact us directly through our team lead.
                            </p>
                        </IonText>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default About;
