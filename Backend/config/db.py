from sqlalchemy import create_engine,MetaData

engine = create_engine('mysql+pymysql://root:Mypassword%40054@localhost:3306/test')
meta = MetaData()
conn = engine.connect()