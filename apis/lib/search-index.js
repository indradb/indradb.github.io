var searchIndex = {};
searchIndex["braid_db"] = {"doc":"","items":[],"paths":[]};
searchIndex["braid_server"] = {"doc":"","items":[],"paths":[]};
searchIndex["braid_user"] = {"doc":"","items":[],"paths":[]};
searchIndex["common"] = {"doc":"","items":[[4,"ProxyDatastore","common","",null,null],[13,"Postgres","","",0,null],[13,"Rocksdb","","",0,null],[4,"ProxyTransaction","","",null,null],[13,"Postgres","","",1,null],[13,"Rocksdb","","",1,null],[5,"datastore","","Creates a new datastore.",null,{"inputs":[],"output":{"name":"proxydatastore"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"has_account","","",0,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"create_account","","",0,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"delete_account","","",0,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"auth","","",0,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"transaction","","",0,{"inputs":[{"name":"self"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get_vertices","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"create_vertex","","",1,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"result"}}],[11,"set_vertices","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"type"}],"output":{"name":"result"}}],[11,"delete_vertices","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"}],"output":{"name":"result"}}],[11,"create_edge","","",1,{"inputs":[{"name":"self"},{"name":"edgekey"},{"name":"weight"}],"output":{"name":"result"}}],[11,"get_edges","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"set_edges","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"weight"}],"output":{"name":"result"}}],[11,"delete_edges","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_edge_count","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"}],"output":{"name":"result"}}],[11,"get_global_metadata","","",1,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_global_metadata","","",1,{"inputs":[{"name":"self"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_global_metadata","","",1,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_account_metadata","","",1,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_account_metadata","","",1,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_account_metadata","","",1,{"inputs":[{"name":"self"},{"name":"uuid"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_vertex_metadata","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_vertex_metadata","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_vertex_metadata","","",1,{"inputs":[{"name":"self"},{"name":"vertexquery"},{"name":"string"}],"output":{"name":"result"}}],[11,"get_edge_metadata","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"set_edge_metadata","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"},{"name":"jsonvalue"}],"output":{"name":"result"}}],[11,"delete_edge_metadata","","",1,{"inputs":[{"name":"self"},{"name":"edgequery"},{"name":"string"}],"output":{"name":"result"}}],[11,"commit","","",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"rollback","","",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[14,"exit_with_err","","Prints to stderr, and then exits the process with a return code of 1.",null,null]],"paths":[[4,"ProxyDatastore"],[4,"ProxyTransaction"]]};
initSearch(searchIndex);
