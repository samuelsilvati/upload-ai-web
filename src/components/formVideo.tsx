'use client'
import { FileVideo, Upload } from 'lucide-react'

import { Button } from './ui/button'
import { Label } from './ui/label'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'

function FormVideo() {
  return (
    <form className="space-y-6">
      <label
        htmlFor="video"
        className="text-muted-foreground hover:bg-primary/5 flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm transition-colors"
      >
        <FileVideo className="h-4 w-4" />
        Selecione um vídeo
      </label>
      <input type="file" id="video" accept="video/mp4" className="sr-only" />
      <Separator />
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 resize-none leading-relaxed"
          placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
        ></Textarea>
      </div>
      <Button className="w-full" type="submit">
        Caregar vídeo <Upload className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

export default FormVideo
