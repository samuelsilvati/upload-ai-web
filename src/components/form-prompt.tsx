import { Wand } from 'lucide-react'

import PromptSelect from './prompt-select'
import { Button } from './ui/button'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Separator } from './ui/separator'
import { Slider } from './ui/slider'

interface FormPromptProps {
  temperature: number
  setTemperature: React.Dispatch<React.SetStateAction<number>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

function FormPrompt({
  onPromptSelected,
  temperature,
  setTemperature,
  onSubmit,
  isLoading,
}: PromptSelectProps & FormPromptProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label>Prompt</Label>
        <PromptSelect onPromptSelected={onPromptSelected} />
      </div>

      <div className="space-y-2">
        <Label>Modelo</Label>
        <Select disabled defaultValue="gpt3.5">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
          </SelectContent>
        </Select>
        <span className="block text-xs italic text-muted-foreground">
          Você poderá customizar essa opção em breve
        </span>
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Temperatura</Label>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={[temperature]}
          onValueChange={(value) => setTemperature(value[0])}
        />

        <span className="block text-xs italic leading-relaxed text-muted-foreground">
          Valores mais altos tendem a deixar o resultado mais criativo e com
          possíveis erros
        </span>

        <Separator />

        <Button type="submit" className="w-full" disabled={isLoading}>
          Executar
          <Wand className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

export default FormPrompt
