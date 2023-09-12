import FormPrompt from '@/components/formPrompt'
import FormVideo from '@/components/formVideo'
import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Github, Wand } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div>
          <h1 className="text-xl font-bold">upload.ai</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground hidden text-sm md:block">
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
            />
            <Textarea
              readOnly
              className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
            />
          </div>

          <p className="text-muted-foreground text-sm">
            Lembre se: você poe utilizar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompr para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>
        <aside className="w-full space-y-6 md:w-80">
          <FormVideo />

          <Separator />

          <FormPrompt />

          <Separator />

          <Button type="submit" className="w-full">
            Executar
            <Wand className="ml-2 h-4 w-4" />
          </Button>
        </aside>
      </main>
      <footer className="text-muted-foreground mt-3 w-full border-t py-6 text-center text-sm md:hidden">
        Desenvolvido com 💜 na NLW da Rocketseat
      </footer>
    </div>
  )
}
