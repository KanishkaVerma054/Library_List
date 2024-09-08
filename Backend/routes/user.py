from fastapi import APIRouter,HTTPException
from models.user import users
from config.db import conn
from schemas.user import User
user = APIRouter()



@user.get('/')
async def fetch_books():
    result = conn.execute(users.select()).fetchall()
    users_list = [dict(row._mapping) for row in result]
    return users_list



@user.get('/getbook/{id}')
async def fetch_book(id:int):
    try:
        query = users.select().where(users.c.id == id)
        result = conn.execute(query).fetchone()
        if result is None:
            raise HTTPException(status_code=404, detail="User not found")
        user_data = dict(result._mapping) 
        return  user_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")



@user.post("/addbook")
async def create_book(user: User):
    try:
        conn.execute(users.insert().values(
            name=user.name,
            author_name=user.author_name,
            email=user.email
        ))
        conn.commit()
        return True 
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@user.put('/editbook/{id}')
async def update_book(id: int, user:User):
    try:
        query = users.select().where(users.c.id == id)
        result = conn.execute(query).fetchone()
        
        if result is None:
            raise HTTPException(status_code=404, detail="User not found")
        conn.execute(users.update().where(users.c.id == id).values(
            name=user.name,
            author_name=user.author_name,
            email=user.email
        ))
        conn.commit()
        query = users.select().where(users.c.id == id)
        updated_user = conn.execute(query).fetchone()
        updated_user_data = dict(updated_user._mapping)
        
        return {"message": "User updated successfully", "user": updated_user_data}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")



@user.delete('/{id}')
async def delete_book(id:int):
    try:
        # Fetch the user to ensure it exists
        query = users.select().where(users.c.id == id)
        result = conn.execute(query).fetchone()
        
        if result is None:
            raise HTTPException(status_code=404, detail="User not found")
        
        conn.execute(users.delete().where(users.c.id == id))
        conn.commit()
        
        return {"message": "User deleted successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")