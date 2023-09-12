import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div>
          <h1 className="text-xl font-bold">upload.ai</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-sm">
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
      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea />
            <Textarea />
          </div>

          <p className="text-muted-foreground text-sm">
            Lembre se: você poe utilizar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompr para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}
