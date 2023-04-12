# React com Storybook

<h3>Iniciando projeto com Vite</h3>
npm create vite@latest
 
<h3>Iniciando Storybook</h3>
npx sb init

<h3>Storybook Run</h3>
npm run storybook


<strong>src/components/CodersButton.jsx</strong>

export default function CodersButton(){
    return <button>Botão da Aplicação</button>
 }



<strong>src/stories/CodersButton.stories.jsx</strong>

import CodersButton from "../components/CodersButton";

export default {
    title: 'Components/CodersButton',
    component: CodersButton
}

export const Primary = () => <CodersButton />
