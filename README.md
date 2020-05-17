#Covid-19 Probabilistic Tracing App

## Abstract 
In order to fight the Coronavirus pandemic - that originated in China in 2019 and spread quickly all over the world, especially in Europe and the US, in 2020 - we thought that a stronger response from the technological community would be needed. Even tough more that 200 thousands people died for this disease, the vast majority of Covid-19 cases generate mild symptoms or no symptom at all: that’s why we’re introducing a probabilistic way in order to understand the probability of being infected. We’re proposing a statistical model, that we’ll be used by in app, for both a static (symptoms-based) and dynamic (location-based) analysis.

## Technologies Involved
1. A statistical model
2. An app, written in NativeScript in order to be easily deployed to both iOS and Android.
3. A server, to be written in Firebase

#### Status
1. Statistical model (DONE, TO TEST)
2. The app (Some section to be finished)
3. The server (to begin)

### The Statistical Model
The primary output of the statistical model is the probability, for the user, to be positive to COVID-19. Calling PN such probability, we can say that
PN = (PS + PD) x TD
Where:
* PS is the static probability, calculated considering the symptoms of the user
* PD is the dynamic probability, calculated considering the interaction that the user has with other users
* TD is a decay factor, that should consider the fact that the disease tends to cease after a period of time.
#### Static Probability
The static probability is function of the symptoms of the user:
PS = f(symptoms)
Considering different probabilities for users that over 60 years old and user with less than 60 years old, the process of  
#### Dynamic Probability
Dynamic probability should be an indicator of the risk of being infected from another person. In order to do this, we define this probability as the maximum of the various positive probabilities of the users that have been near the user. People that have been near to the user are a set of users that share a similar location in the same time as the user.
PD = (MAX(p(…
####Decay 
On average, the virus can stay in the body of a person up to 14 days after the symptoms have ceased. Is it important then to considerate a decay factor in calculation of the probability of being positive. We define such indicator as follows:
TD = 1 if PSD1 = PSD2, where D1 is the day immediately before D2
TD = Incubation time - Last day without symptoms

