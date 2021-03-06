class NotesController < ApplicationController

  def index
    render component: "Notes", props: {notes:  Note.all}
  end

  def new 
    render component: "NewNote"
  end

  def create
    note = Note.new(note_params)
    if note.save
      redirect_to notes_path
    else
    end
  end

  def show
    note = Note.find(params[:id])

    render component: 'Note', props:{note:note}
  end

  def edit
    note = Note.find(params[:id])
    render component: "EditNote", props:{note:note}
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      redirect_to notes_path
    else
    end
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    redirect_to notes_path
  end




  private

  def note_params
    params.require(:note).permit(:title, :description)
  end


end
