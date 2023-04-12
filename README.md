# React com Storybook

<h3>Iniciando projeto com Vite</h3>
npm create vite@latest
 
<h3>Iniciando Storybook</h3>
npx sb init

<h3>Storybook Run</h3>
npm run storybook


<h3>src/components/CodersButton.jsx</h3>

<h3>Storybook Run</h3>
export default function CodersButton(){
    return <button>Botão da Aplicação</button>
 }



<h3>src/stories/CodersButton.stories.jsx</h3>

import CodersButton from "../components/CodersButton";

export default {
    title: 'Components/CodersButton',
    component: CodersButton
}

export const Primary = () => <CodersButton />
