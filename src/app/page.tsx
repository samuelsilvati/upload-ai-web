'use client'

import { useState } from 'react'

import FormPrompt from '@/components/form-prompt'
import FormVideo from '@/components/form-video'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useCompletion } from 'ai/react'
import { Github } from 'lucide-react'

export default function Home() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const promptProps = {
    temperature,
    setTemperature,
  }

  // function handlePromptSelected(template: string) {
  //   console.log(template)
  // }

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: `${process.env.NEXT_PUBLIC_API_URL}/ai/complete`,
    body: {
      videoId,
      temperature,
    },
    headers: {
      'Content-type': 'application/json',
    },
  })
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div>
          <h1 className="text-xl font-bold">upload.ai</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-muted-foreground md:block">
            Desenvolvido com 💜 na NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <ModeToggle />
        </div>
      </div>
      <main className="flex flex-1 flex-col-reverse gap-6 p-6 md:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid h-96 grid-rows-2 gap-4 md:flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              readOnly
              className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              value={completion}
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre se: você pode utilizar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>
        <aside className="w-full space-y-6 md:w-80">
          <FormVideo onVideoUploaded={setVideoId} />

          <Separator />

          <FormPrompt
            {...promptProps}
            onPromptSelected={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </aside>
      </main>
      <footer className="mt-3 w-full border-t py-6 text-center text-sm text-muted-foreground md:hidden">
        Desenvolvido com 💜 na NLW da Rocketseat
      </footer>
    </div>
  )
}
